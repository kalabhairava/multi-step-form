import React from 'react';
import CreateAccountForm from './CreateAccountForm';
import SocialProfilesForm from './SocialProfilesForm';
import PersonalDetailsForm from './PersonalDetailsForm';

class App extends React.Component {
  state = {
    showCreateAccountForm: true,
    showSocialProfilesForm: false,
    showPersonalDetailsForm: false
  };

  goToCreateAccountfFrm = () => {
    this.setState(() => ({
      showCreateAccountForm: true,
      showSocialProfilesForm: false,
      showPersonalDetailsForm: false
    }));
  };

  goToSocialAccountsForm = () => {
    this.setState(() => ({
      showCreateAccountForm: false,
      showSocialProfilesForm: true,
      showPersonalDetailsForm: false
    }));
  };

  goToPersonalDetailsForm = () => {
    this.setState(() => ({
      showCreateAccountForm: false,
      showSocialProfilesForm: false,
      showPersonalDetailsForm: true
    }));
  };

  submitForm = () => {
    alert('Details submitted');
  };

  render() {
    return (
      <div>
        <h1> Boom Boom </h1>
        {this.state.showCreateAccountForm && (
          <CreateAccountForm next={this.goToSocialAccountsForm} />
        )}
        {this.state.showSocialProfilesForm && (
          <SocialProfilesForm
            prev={this.goToCreateAccountfFrm}
            next={this.goToPersonalDetailsForm}
          />
        )}
        {this.state.showPersonalDetailsForm && (
          <PersonalDetailsForm prev={this.goToSocialAccountsForm} submit={this.submitForm} />
        )}
      </div>
    );
  }
}

export default App;
