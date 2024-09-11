import React from 'react';

const Age = (props) => {
    const {age, ageHandler} = props;
  return (
    <div className="row">
        <div className="col">
            <h3 className="display-3 text-danger">Age = {age}</h3>
            <button className='btn btn-'>Increment</button>
        </div>
    </div>
  );
}

export default Age;
