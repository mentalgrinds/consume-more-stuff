import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Redirect } from 'react-router';

import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './containers/App';
import Header from './components/header';
import NewItemForm from './containers/NewItemForm';
import AllItemView from './containers/AllItemView';
import Login from './containers/Login';
import RegistrationForm from './containers/RegistrationForm';

import registerServiceWorker from './registerServiceWorker';




const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/new-item">New Item</Link>
      <Link to="/all">All Items</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

      <Route exact path="/" component={App} />
      <Route path="/new-item" component={NewItemForm} />
      <Route path="/all" component={AllItemView} />
      <Route path="/register" component={RegistrationForm} />
      <Route path="/login" component={Login} />

    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
