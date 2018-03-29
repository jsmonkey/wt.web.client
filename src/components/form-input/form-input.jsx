import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class FormInput extends React.Component {
    static propTypes = {
      className: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      input: PropTypes.object.isRequired,
      meta: PropTypes.object.isRequired,
    };

    static defaultProps = {
      className: '',
      placeholder: '',
      type: 'text',
    };

    renderErrors() {
      const {
        meta: { touched, error, warning },
      } = this.props;
      const message = error || warning;
      return (
        touched && message
          ? <span className={`form-input__${error ? 'error-message' : 'warning-message'}`}> {message} </span>
          : null
      );
    }

    render() {
      const {
        className, placeholder, input,
      } = this.props;

      const containerClassNames = classnames('form-input', className);
      return (
        <div className={containerClassNames} >
          <input
            {...input}
            className="form-input__input"
            placeholder={placeholder}
          />
          { this.renderErrors() }
        </div>
      );
    }
}

