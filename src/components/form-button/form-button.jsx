import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Form } from '../../constants';

export default class FormButton extends React.PureComponent {
    static propTypes = {
      className: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      disabled: PropTypes.bool,
    };
    static defaultProps = {
      className: '',
      title: '',
      type: Form.BUTTON_TYPES.button,
      disabled: false,
    }
    render() {
      const {
        className, title, type, disabled,
      } = this.props;
      const classNames = classnames('button', {
        button_disabled: disabled,
      }, className);

      return (
        <button className={classNames} type={type} disabled={disabled}>
          { title }
        </button>
      );
    }
}
