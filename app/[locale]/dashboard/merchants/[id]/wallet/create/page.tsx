import CreateWalletForm from '@/app/ui/dashboard/merchants/wallet/create-form';
import Breadcrumbs from '@/app/ui/dashboard/merchants/breadcrumbs';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: `Go back`, href: `/dashboard/merchants/${id}` },
          {
            label: 'Create Wallet',
            href: `/dashboard/merchants/${id}/wallet/create`,
            active: true,
          },
        ]}
      />
      <CreateWalletForm id={id} />
    </main>
  );
}
