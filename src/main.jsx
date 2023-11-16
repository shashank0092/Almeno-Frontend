import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store} >
   <Auth0Provider
    domain="dev-vqn0jgptt0m34bjk.us.auth0.com"
    clientId="3IhxxRdd0bCBvHh8VZQWPdDrlzumG2eG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
 </Provider>,
)
