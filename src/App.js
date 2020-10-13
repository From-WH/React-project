import React, { Fragment } from 'react';
import Login from './pages/login'
import Home from './pages/home'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </Fragment>
  );
}

export default App;
