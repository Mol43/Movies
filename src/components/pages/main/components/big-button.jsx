import React, { useState } from 'react';
import { Modal } from '../../../common/modal';

export const BigButton = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");

  const openModal = () => {
    setActiveTab("signup");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const isLoggedIn = localStorage.getItem("is-logged") === "true";

  if (isLoggedIn) {
    return null;
  }

  return (
    <div className='absolute w-full h-[80vh] left-0 bottom-0 flex justify-center bg-[#000000D6] items-center'>
      <a
        href='#'
        className='w-[615px] h-[133px] text-center bg-[#B11226] mt-[180px] text-white py-3 rounded-lg text-[64px]'
        onClick={openModal}
      >
        Sign In
      </a>
      <Modal
        isOpen={ModalOpen}
        onClose={closeModal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};
