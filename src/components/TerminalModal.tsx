import React, { useEffect } from 'react';
import { Terminal } from './Terminal';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onShowToast }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Terminal
      mode="modal"
      onClose={onClose}
      onShowToast={onShowToast}
    />
  );
};
