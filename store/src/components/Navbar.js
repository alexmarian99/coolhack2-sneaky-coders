import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top shadow" id="js-nav">
      <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-around",  padding: "1rem"}}>
        <div className="navbar-header">
          <button className="navbar-toggle" data-target="#myNavbar" data-toggle="collapse" type="button">
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>

          <a className="navbar-brand" href="#"> <img src="loo1.png" alt="" style={{height: "7rem"}}/> </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li><a href="#home">home</a></li>
            <li><a href="#products">products</a></li>
            <li><a href="#special">special</a></li>
            <li><a href="#testimonials">testimonials</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;