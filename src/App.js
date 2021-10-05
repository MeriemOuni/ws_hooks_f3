import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import {Button, Form} from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className="App">
        <Form.Control type="text" placeholder="Enter firstName ..." className="inputs"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        />
        <Form.Control type="text" placeholder="Enter lastName ..." className="inputs"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        />
        <Button variant="success" onClick={handleClick}>{show ? "Hide Counter" : "Show Counter"}</Button>
        {show && <Counter firstName={firstName} lastName={lastName}/>}
    </div>
  );
}

export default App;
