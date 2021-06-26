import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastProvider, useToasts } from 'react-toast-notifications';

import styles from './invite-form.module.css';

const InviteForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const { addToast } = useToasts();

  const onSubmit = values => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';

    fetch(`https://exun-mail.herokuapp.com/addmail?email=${values.email}`)
      .then(resp => resp.text())
      .then(res => {
        console.log(res);
        addToast(res, {
          appearance: res==="saved"?"success":"error",
          autoDismiss: true,
          autoDismissTimeout: 3200,
        });
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        name="email"
        type="text"
        ref={register({
          required: 'Required',
        })}
        placeholder="Email"
        className={styles.input}
        style={errors.email ? { border: '1px solid red' } : {}}
      />
      <button
        type="submit"
        style={{
          display: 'inline-block',
          marginRight: 'auto',
        }}
      >
        Stay Tuned
      </button>
    </form>
  );
};

export default InviteForm;
