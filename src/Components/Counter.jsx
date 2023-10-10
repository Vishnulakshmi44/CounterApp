import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function Counter() {
    // State Counter Creation 
    const [counter, setCounter] = useState(0)// Apply 0 as initial state value

    // Function Counter
    function incrementCounter() {
        //Increment by 1
        setCounter(counter + 1)
    }

    // Function Counter
    function decrementCounter() {
        //Increment by 1
        setCounter(counter - 1)
    }

    function resetCounter() {
        setCounter(0)
    }
    return (

        <div className="m-5 p-5 d-flex justify-content-center align-items-center">
            <div className='container m-5 p-5 border border-2 border-danger shadow rounded 
    w-50'>
                <h1 className='text-dark text-center'>Counter App</h1>
                <h1 className='text-dark text-center' >{counter}</h1>
                <div className="d-flex justify-content-between ">
                    <MDBBtn color="success" onClick={incrementCounter} > Increment </MDBBtn>
                    <MDBBtn color="danger" onClick={decrementCounter} > Decrement </MDBBtn>
                    <MDBBtn color="info" onClick={resetCounter} > Reset </MDBBtn>
                </div>
            </div>
        </div>
    )
}

export default Counter