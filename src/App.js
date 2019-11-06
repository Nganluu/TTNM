import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import customerManagement from './components/pages/customerManagement'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/quanlykhachhang" component={customerManagement} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
