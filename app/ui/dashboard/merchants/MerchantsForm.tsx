'use client';

import { PlusIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { useState, useEffect } from 'react';
import { createMerchant } from '@/app/lib/actions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Select, SelectItem, Avatar, Snippet } from '@nextui-org/react';
import coins from '@/app/ui/_data/coin_slider-data.json';
import LoadingSpinner from '@/app/ui/_components/LoadingSpinner';

const MerchantForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createMerchant, initialState);

  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      const errorMessages = Object.values(state.errors).flat().join(', ');
      Notify.init({ distance: '30px' });
      Notify.failure(errorMessages);
    }
  }, [state.errors]);

  const handleCoinChange = async (e: any) => {
    const coinSelected = e.target.value;
    setSelectedCoin(coinSelected);
  };

  const selectedCoinData = coins.find(
    (coin: any) => coin.coin === selectedCoin,
  );

  if (status === 'loading') return <LoadingSpinner />;

  return (
    <form
      action={dispatch}
      className="mx-auto my-0 w-full space-y-3 lg:w-[500px]"
    >
      <div className="flex flex-col">
        <Select
          className="max-w-sm md:max-w-md"
          label="Select coin"
          labelPlacement="outside"
          id="coin"
          name="coin"
          radius="md"
          value={selectedCoin}
          isRequired
          onChange={handleCoinChange}
          items={coins}
          renderValue={(items) => {
            return items.map((item: any) => (
              <div key={item.key} className="flex items-center gap-2">
                <Avatar
                  alt={item.data.title}
                  className="flex shrink-0"
                  size="sm"
                  src={item.data.image_dashboard}
                />
                <div className="flex flex-col">
                  <span>{item.data.title}</span>
                </div>
              </div>
            ));
          }}
        >
          {(coin: any) => (
            <SelectItem
              key={coin.coin}
              value={coin.coin}
              textValue={coin.title}
            >
              <div className="flex items-center gap-2">
                <Avatar
                  alt={coin.title}
                  className="flex shrink-0"
                  size="sm"
                  src={coin.image_dashboard}
                />
                {coin.title}
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
      {selectedCoinData && (
        <div className="mb-4">
          <label htmlFor="merchant_name" className="mb-2 block font-bold">
            Enter a merchant name
          </label>
          <div className="relative">
            <input
              type="text"
              id="merchant_name"
              name="merchant_name"
              required
              className="w-full rounded-md border-gray-300 p-2 dark:bg-gray-500 dark:placeholder:text-white"
              placeholder="Merchant name"
            />
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <MerchantButton />
      </div>

      <div
        className="flex h-8 items-center space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <div className="mt-2 flex">
            <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500 dark:text-red-400" />
            <p className="text-xs text-red-500 dark:text-red-400 md:text-sm">
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default MerchantForm;

function MerchantButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending} type="submit">
      {pending ? 'Creating' : ' Create merchant'}
      <PlusIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
