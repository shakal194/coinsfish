// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  apiKey: string;
};

/*export type Settings = {
  [category: string]: {
    [option: string]: {
      Email: boolean;
      Google2Fa: boolean;
      SMS: boolean;
    };
  };
};*/

export type AccordionItemMobileMenu = {
  title: string;
  link: string;
};

export type AccordionData = {
  [key: string]: AccordionItemMobileMenu[];
};

export type OptionSettings = {
  Email: boolean;
  Google2Fa: boolean;
  SMS: boolean;
};

export type CategorySettings = {
  [option: string]: OptionSettings;
};

export type Settings = {
  [category: string]: CategorySettings;
};

export type NotificationSettings = {
  Email: boolean;
  Telegram: boolean;
  SMS: boolean;
};

export type CategoryNotificationSettings = {
  [option: string]: NotificationSettings;
};

export type SettingsNotification = {
  [category: string]: CategoryNotificationSettings;
};

export type Merchant = {
  merchant_id: string;
  user_id: string;
  merchant_name: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type testApiStatus = {
  nameApiTest: string;
  statusApiTest: 'loading' | 'success' | 'error';
  statusCode: number;
  message?: string;
};
