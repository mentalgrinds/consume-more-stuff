import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


// import { Redirect } from 'react-router';

import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './containers/App';
import Header from './components/header';
import NewItemForm from './containers/NewItemForm';
import AllItemView from './containers/AllItemView';
import Login from './containers/Login';
import RegistrationForm from './containers/RegistrationForm';
import Users from './containers/Users';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';
import Messages from './containers/Messages';
import SingleItemView from './containers/SingleItemView'
import ResetPassword from './containers/ResetPassword'
import Nav from './containers/Nav';

import registerServiceWorker from './registerServiceWorker';



const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div id="main-div">
      <Header />
      <div id="content-div">
      <Nav/>
        <Route exact path="/" component={App} />
        <Route path="/new-item" component={NewItemForm} />
        <Route path="/all" component={AllItemView} />
        <Route path="/items" component={SingleItemView} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/messages" component={Messages} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />

      </div>

    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
