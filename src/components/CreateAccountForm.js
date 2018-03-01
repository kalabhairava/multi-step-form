import React from 'react';

class CreateAccountForm extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  render() {
    return (
      <div>
        <h1> Create Account Form </h1>
        <input value={this.state.email} />
        <input value={this.state.password} />
        <input value={this.state.confirmPassword} />
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

export default CreateAccountForm;
