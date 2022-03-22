import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import Login from './Login';
import Home from './Page/Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Account from './Page/Account';
import Checkout from './Page/Checkout';
import ShopGrid from './Page/ShopGrid'; 
import Products from './Page/Products';
import Cart from './Page/Cart';
import Contact from './Page/Contact';
import Service from './Page/Service';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
      <BrowserRouter>
        <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/shopgrid" component={ShopGrid} />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route path="/service" component={Service} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/account" component={Account} />
              <PrivateRoute path="/checkout" component={Checkout} />
            </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;