'use client';

import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session, status } = useSession();
  //console.log(session);

  const userName = session?.user?.name;
  const userId = session?.user?.id;

  return status === 'loading' ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>Customers Page. Hello {userName}</p>
      <p>Your id - {userId}</p>
    </div>
  );
}
