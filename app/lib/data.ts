import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
  Merchant,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
import axios, { AxiosError } from 'axios';
import { auth } from '@/auth';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiMainUrl = process.env.NEXT_PUBLIC_API_MAIN_URL;

//const binanceApi = process.env.NEXT_PUBLIC_BINANCE_API;
//const binanceApi = process.env.NEXT_PUBLIC_BINANCE_API_USA;

const binanceApi =
  process.env.NEXT_PUBLIC_BINANCE_API ||
  process.env.NEXT_PUBLIC_BINANCE_API_USA;

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    //console.log('Fetching revenue data...');
    //await new Promise((resolve) => setTimeout(resolve, 4000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    //console.log('Revenue Data fetch completed after 4 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();

  try {
    //console.log('Fetching latest invoices data...');
    //await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));

    //console.log('Latest invoices Data fetch completed after 3 seconds.');
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  noStore();

  try {
    //console.log('Fetching card data...');
    //await new Promise((resolve) => setTimeout(resolve, 2000));

    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    //console.log('Card Data fetch completed after 2 seconds.');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();

  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    console.log(invoice); // Invoice is an empty array []
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();

  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchBtcBalance() {
  try {
    const balance = await axios.get(`${apiUrl}/Btc/getwalletinfo`);

    const binance = await axios.get(`${binanceApi}`);

    const dataBalanceApi = await balance.data;

    const dataBinance = await binance.data;

    const btcPriceBinance = dataBinance.price;

    const balanceInCurrency = dataBalanceApi.balance;
    const dataBtcBinance = balanceInCurrency * btcPriceBinance;

    const balanceInUsdBinance = parseFloat(dataBtcBinance.toFixed(4));

    return { balanceInCurrency, balanceInUsdBinance };
  } catch (error: any) {
    if (error.code) {
      const balanceInUsdBinance = 'Waiting';

      return { balanceInUsdBinance };
    }
    throw new Error('Failed to fetch data.');
  }
}

/*export async function fetchMerchants() {
  const session = await auth();
  const userId = session?.user?.id;

  try {
    const data = await sql<Merchant>`
      SELECT
        merchant_id,
        user_id,
        merchant_name
      FROM merchants WHERE user_id = ${userId}
      ORDER BY merchant_name ASC
    `;

    const merchants = data.rows;
    return merchants;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all merchants.');
  }
}*/

export async function fetchMerchants() {
  const session = await auth();
  const apiKey = session?.user?.apiKey;

  try {
    const response = await axios.get(
      `${apiMainUrl}/Wallet/get-wallets-details`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'X-Api-Key': apiKey,
        },
      },
    );

    const merchants = response.data;

    return merchants;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all merchants.');
  }
}

/*export async function fetchMerchantById(id: string) {
  noStore();

  try {
    const data = await sql<Merchant>`
      SELECT
        merchant_id,
        user_id,
        merchant_name
      FROM merchants
      WHERE merchant_id = ${id};
    `;

    const merchant = data.rows[0]; // Получаем первый найденный мерчант

    return merchant;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch merchant.');
  }
}*/

export async function fetchMerchantById(id: string) {
  noStore();
  const session = await auth();
  const apiKey = session?.user?.apiKey;

  try {
    const response = await axios.post(
      `${apiMainUrl}/Wallet/get-wallet-by-guid-no-update-balance`,
      id,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'X-Api-Key': apiKey,
        },
      },
    );

    const merchant = response.data;

    return merchant;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch merchant.');
  }
}

/*
export async function fetchMerchantWallet(
  walletName: string,
  selectedCoin: string,
) {
  noStore();
  const session = await auth();
  const apiKey = session?.user?.apiKey;

  console.log('data session', session);
  console.log('data selectedCoin', selectedCoin);
  console.log('walletName', walletName);

  try {
    const response = await axios.post(
      `${apiMainUrl}/Wallet/get-addresses`,
      {
        walletName: walletName,
        typeCurrency: selectedCoin,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          */
//  Accept: '*/*',
/*
          'X-Api-Key': apiKey,
        },
      },
    );

    console.log(response.data);

    return response.data; // Возвращает массив адресов
  } catch (error: any) {
    console.error('Error fetching merchant wallet:', error);
    if (error.response?.status === 500) {
      return { errorHandler: 'Waiting' }; // Возвращает статус ошибки
    }

    throw new Error('Error fetching merchant wallet.');
  }
}
  */
