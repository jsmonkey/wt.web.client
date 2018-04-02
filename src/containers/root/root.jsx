import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

import './root.css';

@withRouter
export default class Root extends React.Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    render() {
      return (
        <div className="root">
          <Header />
          <Content />
          <Footer />
        </div>
      );
    }
}
