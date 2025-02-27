'use client'

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modals, setModals] = useState([]);
    const [merchantName, setMerchantName] = useState('');

  const openModal = (modalName) => {
    setModals((prev) => [...prev, modalName]);
  };

  const isModalOpen = (modalName) => modals.includes(modalName);

  const closeTopModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ openModal, isModalOpen, closeTopModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}