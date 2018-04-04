import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormActions } from '../../actions';


function mapStateToProps({ user }) {
  return {
    isSignedIn: user.isSignedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    FormActions: bindActionCreators(FormActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Form extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      action: PropTypes.string,
      forward: PropTypes.string,
      className: PropTypes.string,
      FormActions: PropTypes.object,
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
      ]),
    };

    static defaultProps = {
      name: '',
      action: '',
      forward: '',
      className: '',
      FormActions: {},
      children: null,
    };

    componentWillMount() {
      const {
        FormActions: { initForm }, name, action, forward,
      } = this.props;
      initForm(name, action, forward);
    }

    @autobind
    onSubmit(event) {
      const {
        FormActions: { submitForm }, name, action, forward,
      } = this.props;
      event.preventDefault();
      submitForm(name, action, forward);
    }

    @autobind
    renderChild(child, index) {
      const { name } = this.props;
      return React.cloneElement(child, {
        formName: name,
      });
    }

    render() {
      const { className, children } = this.props;
      const classNames = classnames('form', className);
      return (
        <form onSubmit={this.onSubmit} className={classNames} >
          {React.Children.map(children, this.renderChild)}
        </form>
      );
    }
}
