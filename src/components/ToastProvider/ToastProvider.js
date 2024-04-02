import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

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

function useEscapeKey(callback) {
  
}

export default ToastProvider;
