import React from 'react';
import Navbar from './components/navabar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Apartments from './components/Pages/Apartments';
import WhyUs from './components/Pages/WhyUs';
import SignUp from './components/Pages/SignUp';
import SignIn from './components/Pages/SignIn';

//comment

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apartments' component={Apartments} />
          <Route path='/why-us' component={WhyUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
