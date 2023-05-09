import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './components/Menu';
import './styles/global-styles.css';
import { Abc } from './templates/Abc/index';
import { App } from './templates/App/index';
import { Page404 } from './templates/Page404/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/abc/:slug?/:id?" component={Abc}></Route>
        <Route path="/abc" component={Abc} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
