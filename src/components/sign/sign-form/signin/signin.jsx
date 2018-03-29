import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormButton from '../../../form-button/form-button';
import FormInput from '../../../form-input/form-input';

import { Validators } from '../../../../utils';

import '../sign-form.css';

@reduxForm({
  form: 'signin',
})
export default class SignIn extends React.Component {
  render() {
    return (
      <form className="sign-form">
        <Field
          name="login"
          placeholder="Login"
          component={FormInput}
          type="text"
          className="sign-form__input"
        />
        <Field
          name="password"
          placeholder="Password"
          component={FormInput}
          type="password"
          className="sign-form__input"
        />
        <FormButton type="submit" className="sign-form_button" title="SignIn" />
      </form>
    );
  }
}
