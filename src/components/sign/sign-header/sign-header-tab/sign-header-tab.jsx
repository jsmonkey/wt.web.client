import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import './sign-header-tab.css';

@withRouter
export default class SignHeaderTab extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    match: PropTypes.object.isRequired,
  };

  static defaultProps = {
    item: {},
  };

  render() {
    const { item: { title, path }, match } = this.props;
    return (
      <li className="sign-header-tab">
        <NavLink to={`${path}`} className="sign-header-tab__title" >
          { title }
        </NavLink>
      </li>
    );
  }
}
