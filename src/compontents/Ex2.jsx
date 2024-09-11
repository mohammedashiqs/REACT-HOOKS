import React, { useReducer, useState } from 'react';


// Example - 2
const reducer = (state, action) => {

try {
    switch (action.type) {
      case 'INCREMENT':
        return {count: state.count+1, showText : state.showText}
        break;
      case 'TOGGLESHOWTEXT':
        return {count: state.count, showText : !state.showText};  
        break
      default:
        return state; //Return Empty state
        break;
    }
} catch (error) {
  console.log(error.message);
}

}

// Example - 3
// Initial State
const initialState = {width: 50};

// Reduce action and state Logic
const reduce = (states, action) => {
  
}

const Ex2 = () => {

  const [counter, setCounter] = useState(0);
  const [isView, setIsView] = useState(false);

  const increment = () => {
    setCounter(counter+1);
    setIsView(!isView);   
  }

 /*  const [state, dispatcher] = usReducer(reducer, initialstate or InitialValue)

  State = Is used for declare variables or state
  dispatcher = 1) Is used for call state Object.
                2) Helps to passing an action constants through dispatcher
  reducer = 1) Is a function, is used for handle the actions. 
            2) Action is used for to determine what kind of action try to take */  

  const [state, dispatcher] = useReducer(reducer, {count:0, showText: true});       

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3 text-success">useReduce Hook</h5>
          <p className="text-secondary">
            useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when state depends on the previous one.
          </p>
          <p className="text-secondary">useReducer also lets you optimize performance for components that trigger deep updates.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example -2</h3>
            <p><b>Count = </b>{state.count}</p>
            <p><b>ShowText = </b>{state.showText && 'This is True Condition'}</p>
            <button type='button' className='btn btn-outline-success' onClick={()=>{
              dispatcher({type: 'INCREMENT'});
              dispatcher({type: 'TOGGLESHOWTEXT'});
            }}>REDUCER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ex2;
