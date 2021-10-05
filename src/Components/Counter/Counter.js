import React,{useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import './Counter.css'

const Counter = ({firstName, lastName}) => {
    const [count, setCount] = useState(0)

    // Component did mount && component will unmount
    useEffect(() => {
        console.log("Component did mount")
        return () => {
            console.log("Component will unmount")
        }
    }, []);

    // Component did update
    useEffect(() => {
        console.log("Component did update")
    });

    return (
        <div>
            <h2>{`Hello ${firstName} ${lastName}`}</h2>
            <Button variant="success" onClick={() => setCount(count + 1)} className="addMinusBtn">+</Button>
            <h2>{count}</h2> 
            <Button variant="success" onClick={() => count > 0 && setCount(count - 1)} className="addMinusBtn">-</Button>
        </div>
    )
}

export default Counter
