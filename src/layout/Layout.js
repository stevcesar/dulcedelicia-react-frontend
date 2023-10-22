import React from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
//función contenedora

const Layout = ({ children, header }) => {
  return (
    <>
      <div className="font-sans">
        {header && <Navbar />}

        <div className="bg-white">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
