import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormActions } from '../../../actions';


function mapStateToProps({ forms }, { formName, name }) {
  const form = forms[formName];
  const field = form ? form[name] : null;
  return {
    value: field ? field.value : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    FormActions: bindActionCreators(FormActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class FormField extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      formName: PropTypes.string,
      converter: PropTypes.func,
      FormActions: PropTypes.object,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
      ]),
      label: PropTypes.string,
      children: PropTypes.element,
      errors: PropTypes.arrayOf(PropTypes.string),
      validators: PropTypes.array,
      asyncValidators: PropTypes.array,
    };

    static defaultProps = {
      name: '',
      formName: '',
      converter: null,
      FormActions: {},
      value: null,
      label: '',
      children: null,
      errors: [],
      validators: [],
      asyncValidators: [],
    };

    componentWillMount() {
      const {
        name, formName, validators, asyncValidators, FormActions: { initField },
      } = this.props;
      initField(formName, name, validators, asyncValidators);
    }

    @autobind
    onChange(value) {
      const {
        name, formName, FormActions: { changeFieldValue },
      } = this.props;
      changeFieldValue(formName, name, value);
    }

    renderErrors() {
      const { errors } = this.props;
      return errors.map(err =>
        (<span className="form-field__error" key={err}>{err}</span>));
    }

    render() {
      const {
        name, value, label, children, converter,
      } = this.props;
      const onChange = converter ? converter(this.onChange) : this.onChange;
      return (
        <div className="form-field">
          { label ? (<label className="form-field__label"> {label} </label>) : null }
          { React.cloneElement(children, { name, value, onChange }) }
          { this.renderErrors() }
        </div>
      );
    }
}
