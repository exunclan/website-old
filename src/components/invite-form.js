import React from 'react';

class InviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      name: '',
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
    let completeText = 'Error Making Request';
    if (success) {
      completeColor = '#42c8c5';
      completeText = 'Check Your Email';
    }
    this.setState({ complete: true, completeColor, completeText });
  }

  request(e) {
    e.preventDefault();
    const { email, name } = this.state;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    fetch('/invites/add.php', {
      method: 'POST',
      body: formData,
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
    const { name, email } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <input
            onChange={this.handleChange.bind(this, 'name')}
            key="name"
            value={name}
            type="text"
            placeholder="School"
            style={{
              marginRight: '1rem',
            }}
          />
          <input
            onChange={this.handleChange.bind(this, 'email')}
            key="email"
            type="text"
            value={email}
            placeholder="Email"
            style={{ marginRight: '1em' }}
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
        </div>
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
