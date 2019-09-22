import React from 'react';

import styles from './invite-form.module.css';

class InviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      email: '',
      completeText: '',
      completeColor: '',
    };
    this.request = this.request.bind(this);
    this.complete = this.complete.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  complete(success) {
    let completeColor = '#dd637e';
    let completeText = 'Invite Already Requested';
    if (success) {
      completeColor = '#42c8c5';
      completeText = 'Invite Requested';
    }
    this.setState({ complete: true, completeColor, completeText });
  }

  request(e) {
    e.preventDefault();
    const { email } = this.state;
    fetch('https://register.exunclan.com/api/invite/request', {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(res => {
        if (res.status === 200) this.complete(true);
        else this.complete(false);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  handleChange(field, e) {
    const newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  }

  renderComplete() {
    const { completeColor, completeText } = this.state;
    return (
      <button
        type="button"
        style={{
          backgroundColor: completeColor,
          borderColor: completeColor,
          transform: 'none',
          cursor: 'default',
          boxShadow: 'none',
        }}
      >
        {completeText}
      </button>
    );
  }

  renderForm() {
    const { email } = this.state;
    return (
      <form className={styles.form}>
        <input
          onChange={this.handleChange.bind(this, 'email')}
          key="email"
          type="text"
          value={email}
          placeholder="Email"
          className={styles.input}
        />
        <button
          type="button"
          onClick={this.request}
          style={{
            display: 'inline-block',
            marginRight: 'auto',
          }}
        >
          Request Invite
        </button>
      </form>
    );
  }

  render() {
    const { complete } = this.state;
    if (complete) {
      return this.renderComplete();
    }
    return this.renderForm();
  }
}

export default InviteForm;
