import React from 'react';
import { Switch, Route } from 'react-router';

import SignIn from '../../components/sign/sign-form/signin/signin';
import SignUp from '../../components/sign/sign-form/signup/signup';
import SignHeader from '../../components/sign/sign-header/sign-header';

import { Routes, Sign as SignConstants } from '../../constants';

import './sign.css';

export default class Sign extends React.Component {
  render() {
    return (
      <div className="sign">
        <SignHeader items={SignConstants.SIGN_TABS} />
        <Switch>
          <Route path={Routes.sign.in.path} component={SignIn} />
          <Route path={Routes.sign.up.path} component={SignUp} />
        </Switch>
      </div>
    );
  }
}
