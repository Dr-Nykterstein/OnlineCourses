import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navabar/Navbar';
import Home from './components/home/HomePage';
import Apartments from './components/apartaments/ApartmentsPage';
import WhyUs from './components/whyUs/WhyUsPage';
import SignUp from './components/signUp/SignUpPage';
import SignIn from './components/signIn/SignInPage';
import HotelsInCity from './components/hotelsInCity/HotelsInCityPage';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apartments" component={Apartments} />
          <Route path="/why-us" component={WhyUs} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/hotels-in-city" component={HotelsInCity} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
