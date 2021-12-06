
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import scifiPic from './img/scific.jpeg';

function Welcome(props) {
    return (
        <div>
            <body>
                Find a movie to watch today!
            </body>
            <body>
                Access our expansive database of movie
                recommendations catered to you by logging in or
                signing up to our website!
            </body>
        </div>
        );
}

function Genres(props) {
    return (
        <div>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
            <Button style={{padding: "15px 32px", borderradius: "8px", color: "black", backgroundcolor: "white"}} onClick={() => {}}> Action </Button>
        </div>
    );
}

function Swipe(props) {

    const [isLoggedIn, GenresSelected] = useState ({
        token: false,
        action: false,
        comedy: false,
        romance: false,
        animation: false,
        history: false,
        musical: false
    });
}

function Home(props) {

  const [isExpanded, setExpanded] = useState(true);

  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentPoster, setCurrentPoster] = useState(0);

  const [note, setNote] = useState({
      title: "",
      year: "",
      poster: ""
    });

    function handleChange(event) {
      const { name, value } = event.target;
      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    }

    function submitNote(event) {
      props.onAdd(note);
      setNote({
        title: currentTitle,
        content: currentYear
      });
      event.preventDefault();
    }

    function test(event) {
      setNote({
        title: currentTitle,
        content: currentYear
      });
      event.preventDefault();
    }

    useEffect(() => {
        fetch('/generate',{
          method:"POST",
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({Action:true,History:true,Comedy:true,Romance:true,SciFi:true,Musical:true,Animation:true,Horror:true})
        }).then(res => res.json()).then(data => {
        setCurrentTitle(data.title);
        setCurrentYear(data.year);
        setCurrentPoster(data.poster);
        });
    }, []);

    return (
        <div>
          <form className="create-note">
            {isExpanded && (
              <input
                name="title"
                onChange={handleChange}
                value={currentTitle}
                
              />
            )}

            <textarea
              name="content"
              onChange={handleChange}
              value={currentYear}  
            />
              <img src={currentPoster}/>
              <br/>
              <Fab style={{color: "green"}} onClick={submitNote}>
                <FavoriteIcon />
              </Fab>
              <Fab style={{color: "red"}} onClick={test}>
                <HeartBrokenIcon />
              </Fab>

          </form>
        </div>
      );
}

export default Home;

const containerStyles={
    backgroundImage: "linear-gradient(to right, #0E98CD, #83CAE5)",
    alignPropType: 'center',
    textAlign: 'center',
    height:'100vh'
}

const titleStyle ={
    alignPropType: "center",
    textAlign: 'center',
    borderBottom:"3px solid black",
    paddingBottom: '10px'
}

const button_styling = {
    color:'#09B5F6',
    fontWeight: 'bold',
    border:"5px solid",
    borderRadius: '30px',
    borderColor: '#09B5F6',
    backgroundColor: 'white'
}

const card_border ={
    border: '1px transparent',
    borderRadius: "10px",
    width: '16rem'
}
