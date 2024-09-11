import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success shadow">
      <div className="container">
        <NavLink to={`/`} className='navbar-brand'>React Hooks</NavLink>

        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#menu'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='menu'>
          <ul className="nav-bar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={`/ex1`} className='nav-links'>Ex1</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex2`} className='nav-links'>Ex2</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex3`} className='nav-links'>Ex3</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex4`} className='nav-links'>Ex4</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex5`} className='nav-links'>Ex5</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex6`} className='nav-links'>Ex6</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex7`} className='nav-links'>Ex7</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex8`} className='nav-links'>Ex8</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/ex9`} className='nav-links'>Ex9</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
