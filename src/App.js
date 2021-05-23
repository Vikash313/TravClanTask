import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ViewCustomers from './components/viewCustomers'
import SingleCustomers from './components/singleCustomer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ViewCustomers} />
          <Route exact path="/single-customer" component={SingleCustomers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
