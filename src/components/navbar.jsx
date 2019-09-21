import React from 'react';

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Total Counter : <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
    </nav>
  );
}
 
export default NavBar;