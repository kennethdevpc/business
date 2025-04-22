'use client';

import { motion } from 'framer-motion';
import type { FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

type WhatsAppProps = {
  link?: string;
  label?: string;
  size?: 'small' | 'medium' | 'large';
};

const WhatsApp: FC<WhatsAppProps> = ({
  link = 'https://wa.link/yuij7m',
  label = 'Contact us on WhatsApp',
  size = 'medium',
}) => {
  // Size mapping for responsive design
  const sizeClasses = {
    small: 'w-10 h-10 text-xl',
    medium: 'w-12 h-12 text-2xl',
    large: 'w-14 h-14 text-3xl',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.open(link, '_blank')}
      className={`fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300 ${sizeClasses[size]}`}
      aria-label={label}
    >
      <FaWhatsapp />
    </motion.button>
  );
};

export default WhatsApp;
