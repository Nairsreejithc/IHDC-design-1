// App.js
import React from 'react';
import MainNavbar from './MainNavbar';
import NavigationNavbar from './NavigationNavbar';
import PremiumFeaturesSection from './PremiumFeaturesSection';
import Home from './Home';

function App() {
  return (
    <div style={{width:"100%"}}>
      <div className="container" style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:'center'}}>
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="./images/real-estate-house.png" alt="Logo" className="logo mr-2" style={{ height: '60px' }} />
        </a>
          <span className="d-flex flex-column justify-content-center">
            <span className="d-none d-lg-block h5 mb-0">XYZ SYSTEM LLP.</span>
          </span>
      </div>
     
      <NavigationNavbar />
      <PremiumFeaturesSection />
    </div>
  );
}

export default App;
