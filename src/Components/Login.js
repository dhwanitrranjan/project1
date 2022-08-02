import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Login() {
  var email = useRef("")
  var pw = useRef("")

  const navigate = useNavigate();

  const [err, setErr] = useState({
    userNameErr:"",
    passwordErr:""
  })

  let handleInput = (e) =>{
    var userErr = false
    var pwErr = false
    e.preventDefault();

    if (email.current.value==="dhwanit@gmail.com") {
      userErr = true
    } else if (email.current.value.length < 3 && email.current.value.length > 15){
      setErr({...err, userNameErr:"The length of username should be more than 3 and less than 15."})
    } else if (email.current.value.length === 0) {
      setErr({...err, userNameErr:"Can not be empty."})
    } else {
      setErr({...err, userNameErr:""})
    }

    if (pw.current.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)) {
      pwErr = true
    } else if (pw.current.value.length < 8){
      setErr({...err, passwordErr:"The length of password should be more 8."})
    } else if (pw.current.value.length === 0) {
      setErr({...err, passwordErr:"Can not be empty."})
    } else {
      setErr({...err, passwordErr:"Should contain Uppercase, Lowercasenumbers and special charecters."})
    }

    console.log(userErr, pwErr)
    if (userErr && pwErr){
      navigate('/add-data')
    }
  }

  return (
    <div>
      <Container>
        <Form style={{border: "100px solid"}} className="p-4" onSubmit={handleInput}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="username" ref={email}/>
          </Form.Group>
          {err.userNameErr}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" ref={pw}/>
          </Form.Group>
          {err.passwordErr}
          <br/>
          <Button variant="primary" type="submit">Log In</Button>
        </Form>
      </Container>
      <br />      
    </div>
  )
}

export default Login