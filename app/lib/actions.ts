'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import axios, { AxiosError } from 'axios';

const apiMainUrl = process.env.NEXT_PUBLIC_API_MAIN_URL;
const apiMiniUrl = process.env.NEXT_PUBLIC_API_MINI_URL;
const apiRegisterUrl = process.env.NEXT_PUBLIC_API_REGISTR_URL;

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    id?: string[];
    customerId?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
  //  throw new Error('Failed to Delete Invoice');
}

//BEGIN SIGNIN
//EmailValidate
export async function handleEmailSubmitSign(email: string) {
  if (!email) {
    console.error('Email can`t be empty.');
    return {
      errors: { email: ['Email can`t be empty.'] },
    };
    //throw new Error('Email не может быть пустым.');
  }

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  if (!validateEmail(email)) {
    console.error('Input correct email');
    return {
      errors: { email: ['Input correct email'] },
    };
    //throw new Error('Введите корректный email.');
  }

  try {
    const emailValidation = await fetch(
      `${apiRegisterUrl}/Validation/email-exist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify(email),
      },
    );

    if (emailValidation.status === 400) {
      console.log(emailValidation.status, 'Email not found');
      return {
        errors: { email: ['Email not found.'] },
      };
    }

    const response = await fetch(`${apiRegisterUrl}/Registration/sendcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify(email),
    });
  } catch (error) {
    console.error('OTP Code don`t send:', error);
    throw new Error('OTP Code don`t send.');
  }
}

//SIGNIN

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    console.log('error', error);
    if (error instanceof AuthError) {
      console.log('error type', error.type);
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
//END SIGNIN

//BEGIN REGISTR API
//Email Validate
export async function handleEmailSubmitRegister(email: string) {
  if (!email) {
    console.error('Email can`t be empty.');
    return {
      errors: { email: ['Email can`t be empty.'] },
    };
    //throw new Error('Email не может быть пустым.');
  }

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  if (!validateEmail(email)) {
    console.error('Input correct email');
    return {
      errors: { email: ['Input correct email'] },
    };
    //throw new Error('Введите корректный email.');
  }

  try {
    const emailValidation = await fetch(
      `${apiRegisterUrl}/Validation/email-exist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify(email),
      },
    );

    if (emailValidation.status === 200) {
      console.log(emailValidation.status, 'Email already exist');
      return {
        errors: { email: ['Email already exist.'] },
      };
    }

    const response = await fetch(`${apiRegisterUrl}/Registration/sendcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify(email),
    });
  } catch (error) {
    console.error('OTP Code don`t send:', error);
    throw new Error('OTP Code don`t send.');
  }
}

//ADD USER
const AddUser = z
  .object({
    login: z.string({ invalid_type_error: 'Please input login.' }),
    email: z.string({ invalid_type_error: 'Please input email.' }),
    otpcode: z
      .string({ invalid_type_error: 'Please input a valid OTP Code.' })
      .regex(/^\d{5}$/, { message: 'OTP Code must be exactly 5 digits.' }),
    password: z
      .string({ invalid_type_error: 'Please input password.' })
      .min(8, {
        message: 'Passwords must contains 8 or more symbols.',
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: 'Passwords must contains special symbols.',
      }),
    confirmPassword: z.string({
      invalid_type_error: 'Please input confirm password.',
    }),
    privacy_and_terms: z.string({
      invalid_type_error:
        'Read and accept the Privacy Policy and Terms of Use.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['password'],
    message: 'Passwords do not match.',
  });

export type AddUserState = {
  errors?: {
    email?: string[];
    login?: string[];
    otpcode?: string[];
    password?: string[];
    confirmPassword?: string[];
    privacy_and_terms?: string[];
    error?: string[];
  };
  message?: string | null;
};

export async function addUser(prevState: AddUserState, formData: FormData) {
  const validatedFields = AddUser.safeParse({
    email: formData.get('email'),
    login: formData.get('email'),
    otpcode: formData.get('otpcode'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    privacy_and_terms: formData.get('privacy_and_terms'),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    // Собираем все ошибки
    const errors = validatedFields.error.flatten().fieldErrors;

    // Дополнительная проверка для логики, не учтенной в `zod`
    if (formData.get('password') !== formData.get('confirmPassword')) {
      errors.password = [...(errors.password || []), 'Passwords do not match.'];
    }

    return {
      errors,
      message: 'Validation Failed. Failed to Create User.',
    };
  }

  const { login, email, otpcode, password } = validatedFields.data;

  try {
    const response = await fetch(`${apiRegisterUrl}/Registration/adduser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify({ email, otpcode, password, login }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      if (errorData === 6) {
        return {
          errors: { otpcode: ['OTP Code not valid'] },
        };
      }
      if (errorData === 0) {
        return {
          errors: { email: ['Login already exists'] },
        };
      }
      if (errorData === 14) {
        return {
          message: 'Something went wrong. Please try again later.',
        };
      }
      //throw new Error(`Request failed with status ${response.status}`);
    }

    console.log(
      'Response status -',
      response.status,
      'Response statusText -',
      response.statusText,
    );
    console.log('User add successfully.');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
  revalidatePath('/');
  redirect('/signin');
}
//END REGISTR API

//BEGIN RECOVERY PASSWORD
//Email Validate
export async function handleEmailSubmitRecovery(email: string) {
  if (!email) {
    console.error('Email can`t be empty.');
    return {
      errors: { email: ['Email can`t be empty.'] },
    };
    //throw new Error('Email не может быть пустым.');
  }

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  if (!validateEmail(email)) {
    console.error('Input correct email');
    return {
      errors: { email: ['Input correct email'] },
    };
    //throw new Error('Введите корректный email.');
  }

  try {
    const emailValidation = await fetch(
      `${apiRegisterUrl}/Validation/email-exist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify(email),
      },
    );

    if (emailValidation.status === 400) {
      console.log(emailValidation.status, 'Cant find email');
      return {
        errors: { email: ['Cant find email.'] },
      };
    }

    const response = await fetch(`${apiRegisterUrl}/Registration/sendcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify(email),
    });
  } catch (error) {
    console.error('OTP Code don`t send:', error);
    throw new Error('OTP Code don`t send.');
  }
}

//RECOVERY PASSWORD
const RecoveryUser = z
  .object({
    login: z.string({ invalid_type_error: 'Please input login.' }),
    email: z.string({ invalid_type_error: 'Please input email.' }),
    otpcode: z
      .string({ invalid_type_error: 'Please input a valid OTP Code.' })
      .regex(/^\d{5}$/, { message: 'OTP Code must be exactly 5 digits.' }),
    newPassword: z
      .string({ invalid_type_error: 'Please input password.' })
      .min(8, {
        message: 'Passwords must contains 8 or more symbols.',
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: 'Passwords must contains special symbols.',
      }),
    confirmPassword: z.string({
      invalid_type_error: 'Please input confirm password.',
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['newPassword'],
    message: 'Passwords do not match.',
  });

export type RecoveryUserState = {
  errors?: {
    email?: string[];
    login?: string[];
    otpcode?: string[];
    newPassword?: string[];
    confirmPassword?: string[];
    error?: string[];
  };
  message?: string | null;
};

export async function recoveryUser(
  prevState: RecoveryUserState,
  formData: FormData,
) {
  const validatedFields = RecoveryUser.safeParse({
    email: formData.get('email'),
    login: formData.get('email'),
    otpcode: formData.get('otpcode'),
    newPassword: formData.get('newPassword'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    // Собираем все ошибки
    const errors = validatedFields.error.flatten().fieldErrors;

    // Дополнительная проверка для логики, не учтенной в `zod`
    if (formData.get('newPassword') !== formData.get('confirmPassword')) {
      errors.newPassword = [
        ...(errors.newPassword || []),
        'Passwords do not match.',
      ];
    }

    return {
      errors,
      message: 'Validation Failed. Failed to Create User.',
    };
  }

  const { login, email, otpcode, newPassword } = validatedFields.data;

  try {
    const response = await fetch(
      `${apiRegisterUrl}/Registration/changepassword`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify({ email, otpcode, newPassword, login }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      if (errorData === 6 || errorData === 13) {
        return {
          errors: { otpcode: ['OTP Code not valid'] },
        };
      }
      if (errorData === 0) {
        return {
          errors: { login: ['Login already exists'] },
        };
      } else {
        return {
          errors: { error: ['Ooops. Something went wrong'] },
        };
      }
      //throw new Error(`Request failed with status ${response.status}`);
    }

    console.log(response);
    console.log('User password recovery successfully.');
  } catch (error) {
    return {
      message: 'Database Error: Failed to recovery User password.',
    };
  }
  revalidatePath('/');
  redirect('/signin');
}
//END RECOVERY PASSWORD

//BEGIN CREATE MERCHANT
const CreateMerchant = z.object({
  merchant_name: z.string({ invalid_type_error: 'Please input name.' }),
  typeCurrency: z.string({ invalid_type_error: 'Please input coin.' }),
});

export type MerchantState = {
  errors?: {
    merchant_name?: string[];
  };
  message?: string | null;
};

export async function createMerchant(
  prevState: MerchantState,
  formData: FormData,
) {
  const session = await auth();
  const apiKey = session?.user?.apiKey;

  const validatedFields = CreateMerchant.safeParse({
    merchant_name: formData.get('merchant_name'),
    typeCurrency: formData.get('coin'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Merchant.',
    };
  }

  const merchant_name = validatedFields.data.merchant_name;
  const typeCurrency = validatedFields.data.typeCurrency;

  let merchantId: string | undefined;

  try {
    const response = await axios.post(
      `${apiMainUrl}/Wallet/create-wallet`,
      {
        WalletName: merchant_name,
        status: true,
        typeCurrency: typeCurrency,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'X-Api-Key': apiKey,
        },
      },
    );

    console.log('Successfuly create merchant', response.data);

    merchantId = response.data.uniqGuid;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.data === 6
      ) {
        console.error('Failed to create merchant:', error?.response?.data);
        console.error(error?.response);
        return {
          errors: { merchant_name: ['Merchant already exists'] },
        };
      }
    }

    console.error('Failed to create merchant:', error);
    return {
      errors: { merchant_name: ['Failed to create merchant. Try again later'] },
    };
  }

  revalidatePath('/dashboard');
  redirect(`/dashboard/merchants/${merchantId}`);
}
//END CREATE MERCHANT

//BEGIN CREATE WALLET
export async function createWallet(walletName: string, selectedCoin: string) {
  const session = await auth();
  const apiKey = session?.user?.apiKey;

  try {
    const response = await axios.post(
      `${apiMainUrl}/Wallet/add-address`,
      { walletName, typeCurrency: selectedCoin },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'X-Api-Key': apiKey,
        },
      },
    );

    console.log('Successfuly create wallet', response);

    return { status: 200, message: 'Successfully created wallet.' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.statusText === 'Bad Request'
      ) {
        console.error('Failed to create wallet:', error?.response?.data);
        return {
          status: 400,
          message: 'Failed to create wallet',
        };
      }
    }
    console.error('Failed to create wallet:', error);
    return { message: 'Failed to create wallet.' };
  }

  //revalidatePath('/dashboard/wallet/create');
  // redirect('/dashboard/wallet/create');
}
//END CREATE WALLET

//BEGIN FETCH MERCHANT WALLET
export async function fetchMerchantWallet(
  walletName: string,
  selectedCoin: string,
) {
  const session = await auth();
  const apiKey = session?.user?.apiKey;

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
          Accept: '*/*',
          'X-Api-Key': apiKey,
        },
      },
    );

    return { status: 200, message: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.statusText === 'Bad Request'
      ) {
        console.error('Failed to fetch address:', error?.response?.data);
        return {
          status: 400,
          message: 'Failed to fetch address',
        };
      }
    }
    console.error('Failed to fetch address:', error);
    return { message: 'Failed to fetch address.' };
  }
}
//END FETCH MERCHANT WALLET

//TESTS API START
async function testApiConnection(
  url: string,
  successMessage: string,
  badRequestMessage: string,
  errorMessage: string,
) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'X-Api-Key': 'secretApiKey',
      },
    });

    if (response.status === 200) {
      console.log(successMessage);
      return { status: 200, message: successMessage };
    } else if (response.status === 400) {
      console.error(badRequestMessage);
      return { status: 400, message: badRequestMessage };
    } else {
      console.error('Unexpected status code:', response.status);
      return {
        status: response.status,
        message: `Unexpected status code: ${response.status}`,
      };
    }
  } catch (error) {
    console.error(errorMessage, error);
    throw new Error(errorMessage);
  }
}

export async function testMainApiConnection() {
  return testApiConnection(
    `${apiMainUrl}/Batman/test-main-api-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMainApiConnectionToMiniApi() {
  return testApiConnection(
    `${apiMainUrl}/Batman/test-btc-api-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMainApiCoreConnection() {
  return testApiConnection(
    `${apiMainUrl}/Batman/test-bitcoin-api-bitcoincore-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMiniApiConnection() {
  return testApiConnection(
    `${apiMiniUrl}/Batman/test-connection-api-btc`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMiniApiCoreConnection() {
  return testApiConnection(
    `${apiMiniUrl}/Batman/test-core-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testRegistrationApiToMainApi() {
  return testApiConnection(
    `${apiRegisterUrl}/Batman/tset-connection-main-api`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}
//TEST API END
