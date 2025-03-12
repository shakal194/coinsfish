'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import { Button } from '@/app/ui/button';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { addUser, handleEmailSubmitRegister } from '@/app/lib/actions';
import { Checkbox } from '@heroui/react';
import LoadingSpinner from '@/app/ui/_components/LoadingSpinner';

export default function SignupForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageForm, setErrorMessageForm] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); // 1 - Email, 2 - OTP and Password
  const [email, setEmail] = useState('');
  const [showSpinnerStep1, setShowSpinnerStep1] = useState(false);
  const [showSpinnerStep2, setShowSpinnerStep2] = useState(false);

  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(addUser, initialState);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSpinnerStep1(true);

    try {
      setErrorMessage('');
      const result = await handleEmailSubmitRegister(email);
      if (result?.errors) {
        setErrorMessage(result.errors.email[0]);
      } else {
        setStep(2);
      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setShowSpinnerStep1(false); // Скрываем спиннер
    }
  };

  const handleSubmitStep2 = () => {
    console.log('start ', state.errors);

    const otpCodeInput = document.getElementById('otpcode') as HTMLInputElement;
    const passwordInput = document.getElementById(
      'password',
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      'confirmPassword',
    ) as HTMLInputElement;

    setErrorMessageForm('');

    // Проверяем, заполнены ли оба поля (OTP и пароль)
    if (
      !otpCodeInput?.value ||
      !passwordInput?.value ||
      !confirmPasswordInput?.value
    ) {
      // Если хотя бы одно поле пустое, показываем ошибку и не запускаем спиннер
      setErrorMessageForm('Some input are empty.');
      return;
    }

    console.log('otp, passwordInput, confirmPass dont empty', state.errors);

    setShowSpinnerStep2(true);

    // Отправка формы через серверные действия
    setTimeout(() => {
      console.log('start setTimeout', state.errors);
      if (state.errors) {
        console.log('state errors est`', state.errors);
        // Если есть ошибка, скрываем спиннер и показываем ошибку
        setShowSpinnerStep2(false);
      }
    }, 1000);
  };

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-100 p-6 dark:border dark:bg-black">
        <h1 className="mb-3 text-2xl">Join to continue.</h1>
        {step === 1 && (
          <div className="w-full">
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="autofill:bprder-yellow-200 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-gray-800 dark:placeholder:text-slate-50"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50" />
              </div>
              <div
                id="email-error"
                aria-live="polite"
                aria-atomic="true"
                className="mt-2"
              >
                {errorMessage && (
                  <div className="mt-2 flex items-center">
                    <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                    <p
                      className="text-sm text-red-500 dark:text-red-400"
                      key={errorMessage}
                    >
                      {errorMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4 w-full"
              onClick={handleSubmitStep1}
            >
              Continue
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            {showSpinnerStep1 && <LoadingSpinner size="lg" color="white" />}
          </div>
        )}
        {step === 2 && (
          <>
            <div className="w-full">
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative mb-4">
                  <input
                    className="autofill:bprder-yellow-200 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-gray-800 dark:placeholder:text-slate-50"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    readOnly
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900  dark:text-slate-50 dark:peer-focus:text-slate-50" />
                </div>
                <div id="email-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.email &&
                    state.errors.email.map((error: string) => (
                      <div key={error} className="mt-2 flex items-center">
                        <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500 dark:text-red-400">
                          {error}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="otpcode"
                >
                  OTP Code
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-gray-800 dark:placeholder:text-slate-50"
                    id="otpcode"
                    type="text"
                    name="otpcode"
                    placeholder="Enter OTP Code"
                    required
                  />
                  <ShieldCheckIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50" />
                </div>
                <div id="otpcode-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.otpcode &&
                    state.errors.otpcode.map((error: string) => (
                      <div key={error} className="mt-2 flex items-center">
                        <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-gray-800 dark:placeholder:text-slate-50"
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter password"
                    required
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50" />
                  {passwordVisible ? (
                    <EyeIcon
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50"
                    />
                  ) : (
                    <EyeSlashIcon
                      onClick={togglePasswordVisibility}
                      className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50"
                    />
                  )}
                </div>
                <div className="mt-2 text-[10px]">
                  <ul>
                    <li className="mb-2">
                      Includes at least one special symbol
                    </li>
                    <li>Contains 8 or more symbols</li>
                  </ul>
                </div>
                <div id="password-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.password && (
                    <>
                      {state.errors.password.map((error: string) => (
                        <div key={error} className="mt-2 flex items-center">
                          <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                          <p
                            className="mt-2 text-sm text-red-500 dark:text-red-400"
                            key={error}
                          >
                            {error}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-gray-800 dark:placeholder:text-slate-50"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                  />
                  <KeyIcon className="peer-focus:text-gray-900cursor-pointer pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-slate-50 dark:peer-focus:text-slate-50" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <Checkbox
                    color="success"
                    isRequired={true}
                    name="privacy_and_terms"
                    id="privacy_and_terms"
                  >
                    <label
                      htmlFor="privacy_and_terms"
                      className="ml-2 hover:cursor-pointer focus:hover:cursor-pointer"
                    >
                      <span>I agree with </span>
                      <Link
                        href="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-600 hover:transition-all"
                      >
                        Terms of Use
                      </Link>
                      <span> and </span>
                      <span>
                        <Link
                          href="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-600 hover:transition-all"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </Checkbox>
                </div>
                <div
                  id="privacy_and_terms-error"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {state.errors?.privacy_and_terms &&
                    state.errors.privacy_and_terms.map((error: string) => (
                      <div key={error} className="mt-2 flex items-center">
                        <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                        <p
                          className="text-sm text-red-500 dark:text-red-400"
                          key={error}
                        >
                          {error}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <Button
              className="mt-4 w-full"
              type="submit"
              onClick={handleSubmitStep2}
            >
              Sign Up
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            {showSpinnerStep2 && <LoadingSpinner size="lg" color="white" />}
            <div
              id="form-error"
              aria-live="polite"
              aria-atomic="true"
              className="mt-2"
            >
              {errorMessageForm && (
                <p className="text-sm text-red-500 dark:text-red-400">
                  {errorMessageForm}
                </p>
              )}
            </div>
            {state.errors?.error && (
              <>
                {state.errors.error.map((error: string) => (
                  <div key={error} className="mt-2 flex items-center">
                    <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                    <p
                      className="mt-2 text-sm text-red-500 dark:text-red-400"
                      key={error}
                    >
                      {error}
                    </p>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </form>
  );
}
