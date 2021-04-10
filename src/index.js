import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Zoom from './Zoom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter> 
    <Switch>
      <Route path="/" exact={true} render={(props) => <App {...props} />} />
      <Route path="/zoom/:email/:access" exact={true} render={(props) => <Zoom {...props} />} />
      <Route path="/zoom/:id/:email/:access" exact={true} render={(props) => <Zoom {...props} />} />
      <Route path="/zoom/:id/:email/:access/:bidid" exact={true} render={(props) => <Zoom {...props} />} />

      {/* <Redirect from="/" to="/zoom" /> */}
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
