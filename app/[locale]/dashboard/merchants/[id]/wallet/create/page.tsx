import CreateWalletForm from '@/app/ui/dashboard/merchants/wallet/create-form';
import Breadcrumbs from '@/app/ui/dashboard/merchants/breadcrumbs';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
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
