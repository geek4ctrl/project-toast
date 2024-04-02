import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleDismiss}) {

  return (
  <ol className={styles.wrapper}>
    {
      toasts.map((toast, key) => {
        return (
          <li className={styles.toastWrapper}>        
            <Toast id={key} variant={toast.variant} handleDismiss={handleDismiss}>
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
