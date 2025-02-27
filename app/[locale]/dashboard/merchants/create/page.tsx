import Form from '@/app/ui/dashboard/merchants/MerchantsForm';
import Breadcrumbs from '@/app/ui/dashboard/merchants/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Merchants', href: '/dashboard/merchants' },
          {
            label: 'Create Merchant',
            href: '/dashboard/merchants/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
