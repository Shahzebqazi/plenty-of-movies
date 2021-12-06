import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import axios from "axios";
import  { Genres } from "./Home";

function Login(){

    const [emailReg, setemailReg] = useState([]);
    const [passReg, setpassReg] = useState([]);
    const [token, setToken] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState([]);

    const login = () => {
        axios.post('/login', {
            email: emailReg, 
            password: passReg
        }).then((response) => {
            console.log(response);
            if (response.data.success == true) {
                setToken = response.data.token;
                setIsLoggedIn = true;
            }
        });
    };

    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{justifyContent: 'center'}}>
          <br/>
          <br/>
          <body>Login</body>
          <br/>
          <Form>
            <Form.Label>Email address</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <input type="email"  onChange={(e)=> {setemailReg(e.target.value)}} />
            </Form.Group>
            <br/>
            <Form.Label>Password</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicPassword"  >
                <input type="password" onChange={(e)=> {setpassReg(e.target.value)}}/>
            </Form.Group>
            <br/>
            <Form.Text className="text-muted"><u>Forgot Your Password?</u></Form.Text>
            <br/>
            <br/>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={login}>Login</Button>
          </Form>
          </div>
        </div>
        
    );
}

export default Login;