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
      className: PropTypes.string,
      FormActions: PropTypes.object,
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
      ]),
    };

    static defaultProps = {
      name: '',
      className: '',
      FormActions: {},
      children: null,
    };

    componentWillMount() {
      const { FormActions: { initForm }, name } = this.props;
      initForm(name);
    }

    onSubmit() {

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
        <form className={classNames} >
          {React.Children.map(children, this.renderChild)}
        </form>
      );
    }
}
