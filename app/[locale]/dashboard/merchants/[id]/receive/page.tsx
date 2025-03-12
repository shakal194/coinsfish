import ReceiveForm from '@/app/ui/dashboard/merchants/receive/ReceiveForm';
import Breadcrumbs from '@/app/ui/dashboard/merchants/breadcrumbs';
import { waitForDebugger } from 'inspector';
import { fetchMerchantById } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const merchant = await fetchMerchantById(id);
  const merchantName = merchant.nameWallet;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: `Go back`, href: `/dashboard/merchants/${id}` },
          {
            label: 'Receive',
            href: `/dashboard/merchants/${id}/receive`,
            active: true,
          },
        ]}
      />
      <ReceiveForm id={id} walletName={merchantName} />
    </main>
  );
}
