import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './components/Menu';
import './styles/global-styles.css';
import { Abc } from './templates/Abc/index';
import { App } from './templates/App/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/abc" component={Abc} exact></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
