
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Form  } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import app from './firebase.init';


const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleEmail = event => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  }

  const handlePassword = event =>{
    const passwordValue = event.target.value;
    setPassword(passwordValue);
  }

  const handleFormSubmit = event =>{
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.error(error);
    });
    event.preventDefault();
  }
  return (
    <div className='bg-light'>
      
      <div className='login-form'>
        <Form onSubmit={handleFormSubmit}>
        <h3 className='text-primary'>Please Register!!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>

    </div>
  );
}

export default App;
