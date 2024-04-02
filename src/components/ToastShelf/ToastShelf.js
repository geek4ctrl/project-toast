import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts, handleDismiss}) {

  const handleToastDismissal = (id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
  <ol className={styles.wrapper}>
    {
      toasts.map((toast, key) => {
        return (
          <li className={styles.toastWrapper}>        
            <Toast key={toast.id} variant={toast.variant} toasts={toasts} setToasts={setToasts} onHandleDismiss={() => {handleToastDismissal(toast.id)}}>
              {toast.message}
            </Toast>
          </li>
        )
      })
    }
  </ol>

  );
}

export default ToastShelf;
