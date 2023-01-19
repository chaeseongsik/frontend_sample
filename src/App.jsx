import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import Layout from './common/containers/Layout';
import Home from './home/containers/Home';
import Page404 from './common/components/error/Page404';

class App extends React.Component {

  render() {
    return (
      <Layout history={this.props.history} match={this.props.match} location={this.props.location}>
        <Switch>
          <Route exact path="/Error" component={Page404} />
          <Route component={Home} />
        </Switch>
      </Layout>
    )
  }
}

export default connect(
  (state) => state,
  {}
)(App);
