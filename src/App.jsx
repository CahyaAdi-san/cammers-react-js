import React, { Component } from 'react';
import Header from './Header.jsx';
import Heroes from './Heroes.jsx';
import Data from './Data.jsx';
import Footer from './Footer.jsx';
import Scroll from './Scroll.jsx';


const EcommerceApp = () => {
  return (
    <div className="ecommerce">
      <Header />
      <Scroll />
      <Footer />
    </div>
  );
};

export default EcommerceApp;