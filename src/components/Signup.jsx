import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Signup(){ 

    const [emailReg, setemailReg] = useState('')
    const [passReg, setpassReg] = useState('')

    const signup = () => {
        axios.get('http://np5499.pythonanywhere.com/signup', {
            email: emailReg, 
            password: passReg
        }).then((response) => {
            console.log(response);
        });
    };

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{justifyContent: 'center'}}>
          <br/>
          <br/>
          <body>Sign Up</body>
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
            <br/>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={signup}>Sign Up</Button>
          </Form>
          </div>
        </div>
    );
}

const title = {
    fontWeight: 'bold',
    fontSize: 36,
    color:'white',
    position: 'relative',
    top: '20px',
    backgroundColor: 'transparent',
    textAlign: 'center'
}
const label = {
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
    margin: '10px',
    left:"90px"
}

const imageSize ={
    width: '300px',
    height: '70px',
    paddingLeft: 50
}
const divStyle = {
    height: '100vh',
    backgroundImage: "linear-gradient(to right, #0E98CD, #83CAE5)"
}
const topbarStyle = {
    borderBottom: '1px solid white'
}

const form_container = {
    backgroundImage: "linear-gradient(transparent, #2493BE)",
    border: '1px trasnparent',
    borderRadius: '30px',
    width:"500px",
    height:"800px",
    margin: "auto",
    position: 'relative',
    top: '100px'
}
const button_styling = {
    backgroundColor: 'white',
    color: '#2CA4D3',
    border: '1px solid white',
    fontSize: 20,
    borderColor: '#09B5F6',
    borderRadius: '3px',
    fontWeight: 'bold',
    width: '300px',
    height: '40px',
    cursor:'pointer',
    position: 'relative',
    top: '100px',
    left: '105px'
}


const form_styling = {
    padding: '10px',
    position: 'relative',
    left: '100px',
    borderRadius: '3px',
    border: '2px solid #d3d3d3',
    marginBottom: "20px",
    width: '300px',
    fontSize: 20,
    fontWeight: 'bold'

}

export default Signup;
