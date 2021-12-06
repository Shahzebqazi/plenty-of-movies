import React from "react";
import TheatersIcon from '@mui/icons-material/Theaters';
import Login from "./Login";
import Signup from "./Signup";
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
  let navigate = useNavigate();
  return (

    <header>
      <h1 style={{marginLeft: "auto", display: 'flex'}}>
        <TheatersIcon />
        Plenty of Movies
        <div style={{marginLeft: "auto",  justifyContent: 'flex-end'}}>
        <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {navigate("/login")}}> Login </Button>
        <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {navigate("/signup")}}> Signup </Button> 
        </div>
      </h1>   
    </header>
  );
}

export default Header;
