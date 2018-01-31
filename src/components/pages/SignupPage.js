import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history("/dashboard"));

  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { signup })(SignupPage);
