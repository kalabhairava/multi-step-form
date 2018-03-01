import React from 'react';

class SocialProfileForm extends React.Component {
  state = {
    twitter: '',
    facebook: '',
    googlePlus: ''
  };

  render() {
    return (
      <div>
        <h1> Social Profiles Form </h1>
        <input />
        <input value={this.state.facebook} />
        <input value={this.state.googlePlus} />
        <button onClick={this.props.prev}>Previous</button>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

export default SocialProfileForm;
