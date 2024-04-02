import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const newItem = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant
    }

    const nextItems = [...toasts, newItem];
    setToasts(nextItems);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, setToasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
