import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormButton from '../../../form-button/form-button';
import FormInput from '../../../form-input/form-input';

import { Validators } from '../../../../utils';

import '../sign-form.css';

@reduxForm({
  form: 'signup',
})
export default class SignUp extends React.Component {
  render() {
    const { Common } = Validators;
    return (
      <form className="sign-form">
        <Field
          name="login"
          placeholder="Login"
          component={FormInput}
          validate={[Common.required]}
          type="text"
          className="sign-form__input"
        />
        <Field
          name="password"
          placeholder="Password"
          component={FormInput}
          validate={[Common.required]}
          type="password"
          className="sign-form__input"
        />
        <FormButton type="submit" className="sign-form_button" title="SignUp" />
      </form>
    );
  }
}
