import React from 'react'

function Home() {
  return (
    <div className="container">
        <div className="container" style={{display:"flex",flexDirection:"row",backgroundColor:"#f0f0f0",justifyContent:'center'}}>
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="./images/real-estate-house.png" alt="Logo" className="logo mr-2" style={{ height: '60px' }} />
        </a>
          <span className="d-flex flex-column justify-content-center">
            <span className="d-none d-lg-block h5 mb-0">XYZ SYSTEM LLP.</span>
          </span>
      </div>
    </div>
  )
}

export default Home
