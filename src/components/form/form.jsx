import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.element,
      errors: PropTypes.arrayOf(PropTypes.string),
      onChange: PropTypes.func,
      init: PropTypes.func,
      validators: PropTypes.array,
      asyncValidators: PropTypes.array,
    };

    static defaultProps = {
      name: '',
      label: '',
      children: null,
      errors: [],
      onChange: () => {},
      init: () => {},
      validators: [],
      asyncValidators: [],
    };

    componentWillMount() {
      const {
        name, validators, asyncValidators, init,
      } = this.props;
      init(name, validators, asyncValidators);
    }

    onChange(value) {
      const { name, onChange } = this.props;
      onChange(name, value);
    }

    renderErrors() {
      const { errors } = this.props;
      return errors.map(err =>
        (<span className="form-field__error" key={err}>{err}</span>));
    }

    render() {
      const { name, label, children } = this.props;
      return (
        <div className="form-field">
          { label ? (<label className="form-field__label"> {label} </label>) : null }
          { React.cloneElement(children, { name }) }
          { this.renderErrors() }
        </div>
      );
    }
}
