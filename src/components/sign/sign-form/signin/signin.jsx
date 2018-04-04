import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from '../../../../containers/form/form';
import FormField from '../../../../containers/form/form-field/form-field';

import FormButton from '../../../form-button/form-button';
import FormInput from '../../../form-input/form-input';

import { Validators } from '../../../../utils';

import '../sign-form.css';

export default class SignIn extends React.Component {
  render() {
    return (
      <Form
        name="signin"
        action="/signin"
        forward="/conversations"
        className="sign-form"
      >
        <FormField
          name="login"
          converter={onChange => ({ target: { value } }) => onChange(value)}
        >
          <input
            type="text"
            className="sign-form__input"
            placeholder="Login"
          />
        </FormField>
        <FormField
          name="password"
          converter={onChange => ({ target: { value } }) => onChange(value)}
        >
          <input
            type="password"
            className="sign-form__input"
            placeholder="Password"
          />
        </FormField>
        <FormButton
          title="Sign In"
          type="submit"
          className="sign-form__button"
        />
      </Form>
    );
  }
}
