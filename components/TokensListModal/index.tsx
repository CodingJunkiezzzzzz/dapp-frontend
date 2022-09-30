import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaTimesCircle, FaSearch } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

type ITokensListModalProps = {
  onClose: () => void;
  isVisible: boolean;
};

export default function TokensListModal({ onClose, isVisible }: ITokensListModalProps) {
  return (
    <Transition appear show={isVisible}>
      <Dialog as="div" className="relative z-10" onClose={onClose}></Dialog>
    </Transition>
  );
}
