import React from 'react';
import PropTypes from 'prop-types';

import SignHeaderTab from './sign-header-tab/sign-header-tab';

import './sign-header.css';

export default class SignHeader extends React.Component {
    static propTypes = {
      items: PropTypes.array,
    };

    static defaultProps = {
      items: [],
    };

    renderTabs() {
      const { items } = this.props;
      return items.map(item => <SignHeaderTab item={item} key={item.title} />);
    }

    render() {
      return (
        <ul className="sign-header">
          { this.renderTabs() }
        </ul>
      );
    }
}
