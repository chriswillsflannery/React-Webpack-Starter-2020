import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar/Nav';
import Splash from './Splash/Splash';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Splash />
      <Footer />
    </BrowserRouter>
  )
}

export default App;