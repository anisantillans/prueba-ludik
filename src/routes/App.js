import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </BrowserRouter>
);

export default App;
