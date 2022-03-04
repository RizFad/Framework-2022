import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './HelloComponent';
import Login from './Login/Login';
// import HelloComponent from './HelloComponent';

// const Hello = () =>{
//   return <p>Hallo Massszzzeeeehhhh</p>
// }

// ReactDOM.render(<Hello/>,document.getElementById('root'));

// function HelloComponent() {
//   return HelloComponent
// }

// const HelloComponent = () => HelloComponent

// class StateFullComponent extends React.Component{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }

ReactDOM.render(<Login />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
