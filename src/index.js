import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter> 
    <Switch>
      <Route path="/zoom" render={(props) => <App {...props} />} />
      <Route path="/zoom/:id/:email/:role" render={(props) => <App {...props} />} />

      <Redirect from="/" to="/zoom" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
