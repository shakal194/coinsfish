'use client';

import { Button } from '@/app/ui/button';

export default function AccountPage() {
  return (
    <div>
      <main className="p-6">
        <div className="flex items-center justify-between">
          <h2>My account</h2>
          <Button>Delete</Button>
        </div>
      </main>
    </div>
  );
}
