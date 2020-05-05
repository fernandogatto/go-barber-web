import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

// Context
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// Component
const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({type, title, description}: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setToastMessages([...toastMessages, toast]);
    },
    [toastMessages],
  );

  const removeToast = useCallback((id: string) => {
    setToastMessages((state) => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={toastMessages} />
    </ToastContext.Provider>
  );
};

// Hook
function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
