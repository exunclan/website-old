import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastProvider, useToasts } from 'react-toast-notifications';

import styles from './invite-form.module.css';

const InviteForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const { addToast } = useToasts();

  const onSubmit = values => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyURL + 'https://exun-email-api.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: values.email }),
    })
      .then(resp => resp.json())
      .then(res => {
        console.log(res);
        addToast(res.message, {
          appearance: res.status,
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

// class OldInviteForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       complete: false,
//       email: '',
//       completeText: '',
//       completeColor: '',
//     };
//     this.request = this.request.bind(this);
//     this.complete = this.complete.bind(this);
//     this.renderForm = this.renderForm.bind(this);
//     this.renderComplete = this.renderComplete.bind(this);
//   }

//   complete(success) {
//     let completeColor = '#dd637e';
//     let completeText = 'Already Subscribed';
//     if (success) {
//       completeColor = '#42c8c5';
//       completeText = 'Subscribed!';
//     }
//     this.setState({ complete: true, completeColor, completeText });
//   }

//   request(e) {
//     e.preventDefault();

//     const { email } = this.state;
//     fetch('https://email-api.now.sh/', {
//       method: 'POST',
//       body: JSON.stringify({
//         email: email,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(async res => res.json())
//       .then(data => {
//         const code = data.statusCode;
//         if (code === 300) this.complete(false);
//         else this.complete(true);
//       })
//       .catch(err => {
//         // eslint-disable-next-line no-console
//         console.log(err);
//       });
//   }

//   handleChange(field, e) {
//     const newState = {};
//     newState[field] = e.target.value;
//     this.setState(newState);
//   }

//   renderComplete() {
//     const { completeColor, completeText } = this.state;
//     return (
//       <button
//         type="button"
//         style={{
//           backgroundColor: completeColor,
//           borderColor: completeColor,
//           transform: 'none',
//           cursor: 'default',
//           boxShadow: 'none',
//         }}
//       >
//         {completeText}
//       </button>
//     );
//   }

//   renderForm() {
//     const { email } = this.state;
//     return (
//       <form onSubmit={this.request} className={styles.form}>
//         <input
//           onChange={this.handleChange.bind(this, 'email')}
//           key="email"
//           type="text"
//           value={email}
//           placeholder="Email"
//           className={styles.input}
//         />
//         <button
//           type="submit"
//           style={{
//             display: 'inline-block',
//             marginRight: 'auto',
//           }}
//         >
//           Stay Tuned
//         </button>
//       </form>
//     );
//   }

//   render() {
//     const { complete } = this.state;
//     if (complete) {
//       return this.renderComplete();
//     }
//     return this.renderForm();
//   }
// }

export default InviteForm;
