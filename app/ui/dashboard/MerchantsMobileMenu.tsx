'use client';

import { ReactNode, useState, useEffect } from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import { usePathname } from 'next/navigation';

export default function MerchantsMobileMenu({
  children,
}: {
  children: ReactNode;
}) {
  // Состояние для отслеживания модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const blockBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unblockBodyScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isModalOpen) {
      blockBodyScroll();
    } else {
      unblockBodyScroll();
    }

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
        unblockBodyScroll();
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      unblockBodyScroll();
    };
  }, [isModalOpen]);

  // Закрытие модального окна при изменении пути
  useEffect(() => {
    setIsModalOpen(false); // Закрываем модальное окно, когда путь меняется
  }, [pathname]);

  // Функции открытия и закрытия модального окна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="hidden">{children}</div>
      <div className="p-3 md:hidden">
        <Bars3Icon className="w-6 cursor-pointer" onClick={openModal} />
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800"
            onClick={() => {
              closeModal();
              unblockBodyScroll();
            }}
          >
            <div
              className="relative mx-auto h-full w-full max-w-md bg-white p-4 dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex justify-between">
                <div className="flex">
                  <ThemeButton />
                  {/*<SettingsButton />*/}
                </div>
                <div className=" flex justify-end">
                  <XCircleIcon
                    className="w-6 cursor-pointer"
                    onClick={() => {
                      closeModal();
                      unblockBodyScroll();
                    }}
                  />
                </div>
              </div>
              <div className="h-full overflow-y-auto p-2">{children}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
