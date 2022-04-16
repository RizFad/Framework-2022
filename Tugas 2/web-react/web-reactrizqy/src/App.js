import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Index from './services/index';
import BlogPost from './containers/BlogPost';
import './BlogPost.css';


function App() {
  return(
      <BrowserRouter>
      <div>
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        <div>
        <Switch>
            <Route exact path="/" component={BlogPost} />              
        </Switch>    
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;