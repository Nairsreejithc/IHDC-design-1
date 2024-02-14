import React from 'react';

const MainNavbar = () => {
  return (
      <div className="container" style={{display:"flex",flexDirection:"row",backgroundColor:"#f0f0f0"}}>
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="./images/real-estate-house.png" alt="Logo" className="logo mr-2" style={{ height: '60px' }} />
        </a>
          <span className="d-flex flex-column justify-content-center">
            <span className="d-none d-lg-block h5 mb-0">XYZ SYSTEM LLP.</span>
          </span>
      </div>
  );
};

export default MainNavbar;
