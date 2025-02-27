'use client';

import { useState } from 'react';
//import { fetchMerchantById } from '@/app/lib/data';
//import { usePathname } from 'next/navigation';

/*export default function MerchantMenuPage({
  nameWallet,
}: {
  nameWallet: string;
}) */

export default function MerchantMenuPage({
  apiKey,
  nameWallet,
}: {
  apiKey: string;
  nameWallet: string;
}) {
  const [activeTab, setActiveTab] = useState('history');
  const [settingsTab, setSettingsTab] = useState('settingsApiIntegration');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSettingsTabClick = (tab: string) => {
    setSettingsTab(tab);
  };

  /*const pathname = usePathname();
  const parts = pathname.split('/');
  const merchantId = parts[parts.length - 1];*/

  return (
    <div className="p-4">
      <div className="mt-6 flex justify-between border-b-2 border-gray-200">
        <button
          className={`mr-4 ${activeTab === 'history' ? 'border-b-2 border-indigo-600 font-bold text-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabClick('history')}
        >
          История
        </button>

        <button
          className={`mr-4 ${activeTab === 'settings' ? 'border-b-2 border-indigo-600 font-bold text-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabClick('settings')}
        >
          Настройки
        </button>
        <button
          className={`${activeTab === 'statistics' ? 'border-b-2 border-indigo-600 font-bold text-blue-600' : 'text-gray-500'}`}
          onClick={() => handleTabClick('statistics')}
        >
          Статистика
        </button>
      </div>

      {activeTab === 'history' && (
        <div className="mt-6">Содержимое вкладки "История"</div>
      )}
      {activeTab === 'settings' && (
        <div className="mt-4 flex justify-between">
          <button
            className={`mr-4 ${settingsTab === 'settingsApiIntegration' ? 'border-b-2 border-indigo-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleSettingsTabClick('settingsApiIntegration')}
          >
            Интеграция с помощью API
          </button>
          <button
            className={`mr-4 ${settingsTab === 'settingsPaymentAccuracy' ? 'border-b-2 border-indigo-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleSettingsTabClick('settingsPaymentAccuracy')}
          >
            Точность оплаты
          </button>
          <button
            className={`mr-4 ${settingsTab === 'settingsExchangeRate' ? 'border-b-2 border-indigo-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleSettingsTabClick('settingsExchangeRate')}
          >
            Обменный курс
          </button>
          <button
            className={`mr-4 ${settingsTab === 'settingsCoins' ? 'border-b-2 border-indigo-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => handleSettingsTabClick('settingsCoins')}
          >
            Монеты
          </button>
        </div>
      )}
      {activeTab === 'settings' && settingsTab === 'settingsApiIntegration' && (
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-bold">Интеграция с помощью API</h2>
          {/* Здесь выводите контент для вкладки "Интеграция с помощью API" */}
          <div className="ml-4 flex">
            <div className="mr-10">
              <div className="mr-10 text-gray-500">Статус</div>
              <div className="mr-10 text-gray-500">URL проекта</div>
              <div className="mr-10 text-gray-500">Название проекта</div>
              <div className="mr-10 text-gray-500">ID мерчанта</div>
              <div className="mr-10 text-gray-500">Ключ API</div>
            </div>
            <div>
              <div>Активный</div>
              <div>...</div>
              <div>...</div>
              <div>{nameWallet}</div>
              <div>{apiKey}</div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'settings' &&
        settingsTab === 'settingsPaymentAccuracy' && (
          <div className="mt-6">
            <h2 className="mb-2 text-lg font-bold">Точность оплаты</h2>
          </div>
        )}
      {activeTab === 'settings' && settingsTab === 'settingsExchangeRate' && (
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-bold">Обменный курс</h2>
        </div>
      )}
      {activeTab === 'settings' && settingsTab === 'settingsCoins' && (
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-bold">Монеты</h2>
        </div>
      )}
      {activeTab === 'statistics' && (
        <div className="mt-6">Содержимое вкладки "Статистика"</div>
      )}
    </div>
  );
}
