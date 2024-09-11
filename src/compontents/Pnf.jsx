import React from 'react';
import { NavLink } from 'react-router-dom';

const Pnf = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className='display-3 text-danger text-center'>Page Not Found</h2>
        </div>
      </div>

      <div className="row text-center">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><NavLink to={`/ex1`}>Ex1</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex2`}>Ex2</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex3`}>Ex3</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex4`}>Ex4</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex5`}>Ex5</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex6`}>Ex6</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex7`}>Ex7</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex8`}>Ex8</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/ex9`}>Ex9</NavLink></li>
              <li class="breadcrumb-item"><NavLink to={`/`}>  Home</NavLink></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pnf;
