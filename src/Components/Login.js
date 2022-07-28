import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Login() {

  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    username:"",
    password:""
  })

  const [err, setErr] = useState({
    userNameErr:"",
    passwordErr:""
  })

  let handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value

    if (name === "password"){
      if (value.length < 8 && value.length > 0){
        setErr({...err, passwordErr:"The length of password should be more 8."})
      } else if (!value.match(/^[ A-Za-z0-9_@./#&+-]*$/)) {
        setErr({...err, passwordErr:"The password should contain alphanumeric characters along with special charecters like !, $, #, or %"})
      } else {
        setErr({...err, passwordErr:""})
      }
    }
  }

  return (
    <div>
      <Container>
        <Form style={{border: "100px solid"}} className="p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="username" onChange={handleInput} required/>
          <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} required/>
          </Form.Group>
          {err.passwordErr}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => navigate('add-data')}>Log In</Button>
        </Form>
      </Container>
      <br />      
    </div>
  )
}

export default Login