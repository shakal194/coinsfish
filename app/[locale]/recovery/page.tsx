import RecoveryForm from '@/app/ui/_components/Forms/recovery-form';
import HeaderSettings from '@/app/ui/_components/Headers/HeaderSettings';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Recover Page',
  description: 'Recovery password to CoinsFish.',
};

export default function RecoveryPage() {
  return (
    <>
      <HeaderSettings />
      <main className="flex flex-col p-6">
        <div className="flex justify-center">
          <RecoveryForm />
        </div>
      </main>
    </>
  );
}
