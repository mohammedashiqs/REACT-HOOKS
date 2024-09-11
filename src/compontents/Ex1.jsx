import React, { Fragment, useState } from 'react';

const Ex1 = () => {

    // const [state, stateHandler] = useState(initialValue)

    // Example-1
    let count = 0;
    const [counter, setCounter] = useState(0);


    const increment = () => {
        count = count + 1;
        console.log('COUNT = ', count);
        setCounter(counter + 1);
        console.log('COUNTER = ', counter);
    }

    // Example - 3
    const [title, setTitle] = useState('Welcome to React State');
    const changeTitle = () => {
        setTitle(`React State Example`);
    }

    const [isView, setIsView] = useState(true);
    const toggleView = () => {
        setIsView(!isView);
    }

    //Example - 4
    const [colors, setColors] = useState(['red', 'blue', 'green']);
    const addColor = () => {
        const newColors = [...colors, 'yellow'];
        setColors(newColors);
    }

    //Example - 5
    const [user, setUser] = useState({
        name: 'John Doe',
        age: 30,
        email: 'john.doe@gmail.com',
    });
    const updateUser = () => {
            setUser({...user, name: 'Ashiq', age: 27, email: 'ashiq@gmail.com'});
    }

    // Example - 6
    const [products, setProducts] = useState([
        {id: 1, name: 'Product 1', price: 300},
        {id: 1, name: 'Product 2', price: 200},
        {id: 1, name: 'Product 3', price: 400},

    ])

    const addProduct = () => {
        const newProducts  = {id: products.length + 1, name: 'New Product', price: 400};
        setProducts([...products, newProducts]);
    }

    // Example - 7
    const [inputValue, setInputValue] = useState('React Hook');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col text-center'>
                        <h1 className='display-4 text-success'>useState Hook</h1>
                        <p className='text-secondary'>
                            THAT ALLOWS YOU TO HAVE A STATE VARIABLES IN FUNCTIONAL COMPONENT
                        </p>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 1</h3>
                            <p><b>COUNT = </b>{count}</p>
                            <button className='btn btn-outline-success' onClick={increment}>Increment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 2</h3>
                            <p><b>COUNTER = </b>{counter}</p>
                            <button className='btn btn-outline-success' onClick={increment}>Increment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 3</h3>
                            <p><b>Title = </b>{title}</p>
                            <button className='btn btn-outline-success' onClick={changeTitle}>Change Title</button>+


                            <hr />
                            <p><b>ISVIEW = </b>{isView}</p>
                            <p><b>ISVIEW(IF TRUE) = </b>{isView && 'TRUE'}</p>
                            <p><b>ISVIEW(IF TRUE OR FALSE) = </b>{isView ? 'Condition is True..!' : 'Condition is False..!'}</p>
                            <button className='btn btn-outline-success' onClick={toggleView}>Toggle View</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 4</h3>
                            <p><b>COLORS = </b>{colors}</p>
                            <p><b>COLORS = </b>
                            {
                                colors.map((color, index) => {
                                    return <span key={index} style={{backgroundColor: 
                                        color, padding: '10px', margin: '5px'}}>{color}</span>
                                })
                            }
                            </p>
                            <button className='btn btn-outline-success' onClick={addColor}>Colors</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 5</h3>
                            <p><b>User Name = </b>{user.name}</p>
                            <p><b>User Email = </b>{user.email}</p>
                            <button className='btn btn-outline-success' onClick={updateUser}>Update User</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 6</h3>
                            {
                                products.map(product => {
                                    return (
                                          <div key={product.id} className='my-3'>
                                            <h4>{product.name}</h4>
                                            <p><b>Price = </b>{product.price}</p>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                            <button className='btn btn-outline-success' onClick={addProduct}>Colors</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='lead p-3 border rounded'>
                            <h3>Example - 7</h3>
                           <input type="text" name='name' id='name' className='form-control' placeholder='Enter Your Name..!' value={inputValue} onChange={handleChange} />
                            <p><b>Input Value = </b>{inputValue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Ex1;
