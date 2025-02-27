'use client';

import HeaderSettings from '@/app/ui/_components/Headers/HeaderSettings';
import {
  testMainApiConnection,
  testMainApiConnectionToMiniApi,
  testMainApiCoreConnection,
  testMiniApiConnection,
  testMiniApiCoreConnection,
  testRegistrationApiToMainApi,
} from '@/app/lib/actions';
import { useEffect, useState } from 'react';
import LoadingSpinnerRobinAPITest from '@/app/ui/_components/LoadingSpinnerRobinAPITest';
import { testApiStatus } from '@/app/lib/definitions';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

function ApiStatus({
  nameApiTest,
  message,
  statusApiTest,
  statusCode,
}: testApiStatus) {
  return (
    <div className="flex w-[500px] items-center justify-center border-b-1 py-2">
      {nameApiTest}:{' '}
      {statusApiTest === 'loading' ? <LoadingSpinnerRobinAPITest /> : message}
      {statusCode === 200 && (
        <CheckCircleIcon className="ml-2 h-5 w-5 text-green-500" />
      )}
      {statusCode === 400 && (
        <XCircleIcon className="ml-2 h-5 w-5 text-red-500" />
      )}
      {statusCode === 504 && (
        <XCircleIcon className="ml-2 h-5 w-5 text-red-500" />
      )}
    </div>
  );
}

export default function Page() {
  const [testStatuses, setTestStatuses] = useState<testApiStatus[]>([
    {
      nameApiTest: 'Main API Connection',
      statusApiTest: 'loading',
      statusCode: 0,
    },
    {
      nameApiTest: 'Main API to Mini API Connection',
      statusApiTest: 'loading',
      statusCode: 0,
    },
    {
      nameApiTest: 'Main API Core Connection',
      statusApiTest: 'loading',
      statusCode: 0,
    },
    {
      nameApiTest: 'Mini API Connection',
      statusApiTest: 'loading',
      statusCode: 0,
    },
    {
      nameApiTest: 'Mini API Core Connection',
      statusApiTest: 'loading',
      statusCode: 0,
    },
    {
      nameApiTest: 'Registration API to Main API Connection',
      statusApiTest: 'loading',
      statusCode: 0,
    },
  ]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Флаг для проверки монтирования компонента

    async function fetchApiStatuses() {
      const apiTests = [
        { name: 'Main API Connection', fn: testMainApiConnection },
        {
          name: 'Main API to Mini API Connection',
          fn: testMainApiConnectionToMiniApi,
        },
        { name: 'Main API Core Connection', fn: testMainApiCoreConnection },
        { name: 'Mini API Connection', fn: testMiniApiConnection },
        { name: 'Mini API Core Connection', fn: testMiniApiCoreConnection },
        {
          name: 'Registration API to Main API Connection',
          fn: testRegistrationApiToMainApi,
        },
      ];

      for (const { name, fn } of apiTests) {
        try {
          const result = await fn();
          if (!isMounted) return; // Проверка монтирования перед обновлением состояния

          const statusCode = result.status; // Предполагается, что result содержит statusCode
          const message = result.message;
          const statusApiTest = statusCode === 200 ? 'success' : 'error';

          setTestStatuses((prevStatuses) =>
            prevStatuses.map((status) =>
              status.nameApiTest === name
                ? {
                    ...status,
                    statusCode,
                    statusApiTest,
                    message,
                  }
                : status,
            ),
          );
        } catch (err) {
          console.error('Error fetching API status:', err);
          if (!isMounted) return; // Проверка монтирования перед обновлением состояния
          setError('Failed to fetch some API statuses');
        }
      }
    }

    fetchApiStatuses();

    return () => {
      isMounted = false; // Обновление флага при размонтировании компонента
    };
  }, []);

  return (
    <>
      <HeaderSettings />
      <main className="flex justify-center p-6">
        <div>
          {testStatuses.map((status, index) => (
            <ApiStatus
              key={index}
              nameApiTest={status.nameApiTest}
              statusApiTest={status.statusApiTest}
              statusCode={status.statusCode}
              message={status.message}
            />
          ))}
        </div>
      </main>
    </>
  );
}
