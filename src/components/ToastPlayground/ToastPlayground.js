import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

  function handleToasts(event) {
    event.preventDefault();

    setIsToastVisible(true);

    const newItem = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant
    }

    const nextItems = [...toasts, newItem];
    setToasts(nextItems);
  }

  React.useEffect(() => {

    console.log('Show me the toasts: ', toasts);

  }, [toasts])

  return (
    <form onSubmit={handleToasts}>
          <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      { isToastVisible ? <ToastShelf toasts={toasts} setToasts={setToasts} handleDismiss={setIsToastVisible} /> : <></> }


      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" 
            className={styles.messageInput}             
            value={message}
            onChange={(event) => {setMessage(event.target.value)}}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                  <input
                  id={`variant-${option}`}
                  type='radio'
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => {setVariant(event.target.value)}}/>
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default ToastPlayground;
