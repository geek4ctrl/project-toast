import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';


function ToastShelf() {

  const { toasts, setToasts, dismissToast } = React.useContext(ToastContext);

  const handleToastDismissal = (id) => {
    dismissToast(id)
  }

  return (
  <ol className={styles.wrapper}>
    {
      toasts.map((toast, key) => {
        return (
          <li className={styles.toastWrapper}>        
            <Toast key={toast.id} variant={toast.variant} toasts={toasts} setToasts={setToasts}  onHandleDismiss={() => {handleToastDismissal(toast.id)}}>
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
