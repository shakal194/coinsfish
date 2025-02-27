'use client';

import React, { useState, useEffect } from 'react';
import { OptionSettings, Settings } from '@/app/lib/definitions';
import { Accordion, AccordionItem } from '@nextui-org/react';
import settingsData from '@/app/ui/_data/SettingsSecurity.json';

/*const settingsOptions = [
  {
    category: 'Account Security',
    options: [
      'Authorization',
      'Change password',
      'Reset password',
      'Add, change or disable PIN code',
      'Change security settings',
      'Delete account',
    ],
  },
  {
    category: 'General Security',
    options: [
      'Withdraw from Personal',
      'Recurrence payment',
      'Transfer from Personal to Business',
      'Delete merchant',
      'Refund invoice',
      'Auto-Withdrawal',
      'Turn on/off whitelist management',
      'Add addresses to Addresses’s whitelist',
      'Add IP to API’s whitelist',
      'Payment API key',
      'Payout API key',
      'Unfreeze staked funds',
    ],
  },
];

const initialSettings: Settings = {
  'Account Security': {
    Authorization: { Email: false, Google2Fa: false, SMS: false },
    'Change password': { Email: false, Google2Fa: false, SMS: false },
    'Reset password': { Email: false, Google2Fa: false, SMS: false },
    'Add, change or disable PIN code': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Change security settings': { Email: false, Google2Fa: false, SMS: false },
    'Delete account': { Email: false, Google2Fa: false, SMS: false },
  },
  'General Security': {
    'Withdraw from Personal': { Email: false, Google2Fa: false, SMS: false },
    'Recurrence payment': { Email: false, Google2Fa: false, SMS: false },
    'Transfer from Personal to Business': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Delete merchant': { Email: false, Google2Fa: false, SMS: false },
    'Refund invoice': { Email: false, Google2Fa: false, SMS: false },
    'Auto-Withdrawal': { Email: false, Google2Fa: false, SMS: false },
    'Turn on/off whitelist management': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Add addresses to Addresses’s whitelist': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Add IP to API’s whitelist': { Email: false, Google2Fa: false, SMS: false },
    'Payment API key': { Email: false, Google2Fa: false, SMS: false },
    'Payout API key': { Email: false, Google2Fa: false, SMS: false },
    'Unfreeze staked funds': { Email: false, Google2Fa: false, SMS: false },
  },
};*/

const settingsOptions = settingsData.settingsOptions;
const initialSettings: Settings = settingsData.initialSettings;

const columns: (keyof OptionSettings)[] = ['Email', 'Google2Fa', 'SMS'];

const SecurityPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [isMobile, setIsMobile] = useState(false);

  /*useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);*/

  const handleCheckboxChange = (
    category: string,
    option: string,
    column: keyof OptionSettings,
  ) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        [option]: {
          ...prevSettings[category][option],
          [column]: !prevSettings[category][option][column],
        },
      },
    }));
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Security Settings</h1>
      <div className="space-y-6 lg:hidden">
        {settingsOptions.map((section) => (
          <div key={section.category}>
            <h2 className="mb-2 text-xl font-semibold">{section.category}</h2>
            <Accordion selectionMode="multiple">
              {section.options.map((option) => (
                <AccordionItem key={option} title={option}>
                  <div className="mb-4 flex justify-between">
                    {columns.map((column) => (
                      <label key={column} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={settings[section.category][option][column]}
                          onChange={() =>
                            handleCheckboxChange(
                              section.category,
                              option,
                              column,
                            )
                          }
                        />
                        <span className="ml-2">{column}</span>
                      </label>
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
      <div className="hidden space-y-6 lg:block">
        <table className="mb-6 min-w-full border border-gray-200 bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">
                Category
              </th>
              {columns.map((column) => (
                <th
                  key={column}
                  className="border-b border-gray-200 px-4 py-2 text-left"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {settingsOptions.map((section) => (
              <React.Fragment key={section.category}>
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="bg-gray-100 px-4 py-2 font-semibold dark:bg-gray-600"
                  >
                    {section.category}
                  </td>
                </tr>
                {section.options.map((option) => (
                  <tr key={option}>
                    <td className="border-b border-gray-200 px-4 py-2">
                      {option}
                    </td>
                    {columns.map((column) => (
                      <td
                        key={column}
                        className="border-b border-gray-200 px-4 py-2"
                      >
                        <input
                          type="checkbox"
                          checked={settings[section.category][option][column]}
                          onChange={() =>
                            handleCheckboxChange(
                              section.category,
                              option,
                              column,
                            )
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email</span>
            <div className="flex items-center">
              <span className="mr-4 text-gray-500 dark:text-gray-400">
                sh******4@gm**l.com
              </span>
              <button className="rounded bg-gray-200 px-3 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-100">
                Change
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Phone number</span>
            <button className="rounded bg-black px-3 py-1 text-white">
              Add
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>Password</span>
            <button className="rounded bg-gray-200 px-3 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-100">
              Change
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>PIN code</span>
            <button className="rounded bg-black px-3 py-1 text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
