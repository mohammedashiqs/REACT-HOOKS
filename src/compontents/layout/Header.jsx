import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-success shadow'>
        <div className='container'>
            <NavLink to={`/`} className='navbar-brand'>React Hooks</NavLink>

            <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#menu'>
                <span className=''></span>
            </button>

            <div className="collapse nav-collapse" id='menu'>
              <ul className='navbar'>
              <li className='nav-item'>
                    <NavLink to={`/ex1`} className={`nav-link`}>Ex1</NavLink>
                  </li>
              </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;
