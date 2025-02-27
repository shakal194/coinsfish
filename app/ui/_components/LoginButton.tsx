import { Button } from '@/app/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import LoadingSpinner from './LoadingSpinner'; // Импортируйте компонент спиннера

const LoginButton = () => {
  {
    const [showSpinner, setShowSpinner] = useState(false);
    const { pending } = useFormStatus();

    const handleClick = () => {
      setShowSpinner(true);
    };
    return (
      <>
        <Button
          className="mt-4 w-full"
          aria-disabled={pending}
          type="submit"
          onClick={handleClick}
        >
          {pending ? 'Authorization' : 'Log in'}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        {showSpinner && <LoadingSpinner size="lg" color="white" />}
      </>
    );
  }
};

export { LoginButton };
