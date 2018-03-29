import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import Sign from '../../containers/sign/sign';

import { Routes } from '../../constants';

import './content.css';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path={Routes.sign.in.path} component={Sign} />
          <Route path={Routes.sign.up.path} component={Sign} />
        </Switch>
      </div>
    );
  }
}
