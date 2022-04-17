import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Index from './services/index';
import BlogPost from './containers/BlogPost';
import './BlogPost.css';
import Footer from '../src/containers/Footer';
import Header from '../src/containers/Header';
import Navbar from '../src/containers/Navbar';
import Mahasiswa from '../src/services/Tugas/Mahasiswa'
import About from '../src/components/About';


function App() {
  return(
    <BrowserRouter>
    <div >
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      <div>
        <Navbar/>
        <Header/>
          <Switch>
            <Route exact path="/" component={BlogPost} />
            <Route path="/mahasiswa" component={Mahasiswa} />      
            <Route path="/about" component={About} />      
          </Switch>
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;