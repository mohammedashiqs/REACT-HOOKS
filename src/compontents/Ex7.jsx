import React from 'react';
import Age from './ex7Sub/Age';
import AgeInfo from './ex7Sub/AgeInfo';

const Ex7 = () => {


  const userAge = `React age is ${age} years`;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-2">useCallback Hook</h3>
          <p>useCallback will return memoised version of the </p>
        </div>
      </div>

      <hr />
      <Age age={age} ageHandler = {incrementAge}/>
      <hr />
      <AgeInfo/>
    </div>
  );
}

export default Ex7;
