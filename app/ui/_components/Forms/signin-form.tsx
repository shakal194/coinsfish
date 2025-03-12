'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { authenticate, handleEmailSubmitSign } from '@/app/lib/actions';
import { useState } from 'react';
import React from 'react';
import LoadingSpinner from '@/app/ui/_components/LoadingSpinner';
import { Button } from '@/app/ui/button';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export default function SignForm() {
  const t = useTranslations('signin');

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [errorMessageForm, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); // 1 - Email, 2 - OTP and Password
  const [email, setEmail] = useState('');
  const [showSpinnerStep1, setShowSpinnerStep1] = useState(false);
  const [showSpinnerStep2, setShowSpinnerStep2] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSpinnerStep1(true);

    try {
      setErrorMessage('');
      const result = await handleEmailSubmitSign(email);
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
    const otpCodeInput = document.getElementById('otpcode') as HTMLInputElement;
    const passwordInput = document.getElementById(
      'password',
    ) as HTMLInputElement;

    setErrorMessage('');

    // Проверяем, заполнены ли оба поля (OTP и пароль)
    if (!otpCodeInput?.value || !passwordInput?.value) {
      // Если хотя бы одно поле пустое, показываем ошибку и не запускаем спиннер
      setErrorMessage('Some input are empty.');
      return;
    }

    setShowSpinnerStep2(true);
  };

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-100 p-6 dark:border dark:bg-black">
        <h1 className="mb-3 text-2xl">{t('title')}</h1>
        {step === 1 && (
          <div className="w-full">
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                {t('email')}
              </label>
              <div className="relative">
                <input
                  className="autofill:bprder-yellow-200 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-gray-800 dark:placeholder:text-slate-50"
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t('email_placeholder')}
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
                {errorMessageForm && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {errorMessageForm}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4 w-full"
              onClick={handleSubmitStep1}
            >
              {t('continue')}
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
                  {/*{errorMessage && (
                    <>
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                  )}*/}
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
                <div
                  id="input-error"
                  aria-live="polite"
                  aria-atomic="true"
                  className="flex"
                >
                  {errorMessageForm && (
                    <div className="mt-2 flex">
                      <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessageForm}</p>
                    </div>
                  )}
                </div>
                <div
                  id="form-error"
                  aria-live="polite"
                  aria-atomic="true"
                  className="flex"
                >
                  {errorMessage && (
                    <div className="mt-2 flex">
                      <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <Button
              className="mt-4 w-full"
              type="submit"
              onClick={handleSubmitStep2}
            >
              Sign In
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            {!errorMessage && showSpinnerStep2 && (
              <LoadingSpinner size="lg" color="white" />
            )}
          </>
        )}
      </div>
    </form>
  );
}
