
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
import { Grid, Row, Col } from "react-bootstrap";

import actionPic from './img/action.jpeg'
import romancePic from './img/romance.jpeg'
import horrorPic from './img/horror.jpeg'
import cartoonPic from './img/cartoon.jpeg'
import historicalPic from './img/historical.jpeg'
import scifiPic from './img/scific.jpeg'
import comedyPic from './img/comedy.jpeg'
import musicalPic from './img/musical.jpeg'


function Welcome() {
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

export function Genres(props) {
  return (
    <React.Fragment>
        <div className="card-container" style={containerStyles}>
        <h1 style ={headerStyles}> Please select an interesting genre </h1>
            <div className="row">
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={actionPic} style={imgStyle}/>
                    <Card.Body>
                        <Card.Title style = {cardStyle}>Action</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={romancePic} style={imgStyle}/>
                    <Card.Body>
                        <Card.Title>Romance</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={horrorPic} style={imgStyle} />
                    <Card.Body>
                        <Card.Title>Horror</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={cartoonPic} style={imgStyle}/>
                    <Card.Body>
                        <Card.Title>Animation</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={historicalPic} style={imgStyle}/>
                    <Card.Body>
                        <Card.Title>Historical</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={ scifiPic } style={imgStyle}/>
                    <Card.Body>
                        <Card.Title>Sci-Fi</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={ comedyPic } style={imgStyle}/>
                    <Card.Body>
                        <Card.Title>Comedy</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                </Card></div>
                <div className="col-sm"><Card style={beauty_touchup}>
                    <Card.Img variant="top" src={ musicalPic } style={imgStyle}/>
                    <Card.Body>
                        <Card.Title>Musical</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" style={button_styling}>Select</Button>
                    </Card.Body>
                    <div><Button variant="primary" style={button_styling2}>Confirm</Button></div>
                </Card></div>
            </div>
        </div>
    </React.Fragment>


);
}

function Home(props) {

const [GenresSelected] = useState ({
  token: false,
  action: false,
  comedy: false,
  romance: false,
  animation: false,
  history: false,
  musical: false
});

const [currentTitle, setCurrentTitle] = useState([]);
const [currentYear, setCurrentYear] = useState([]);
const [currentPoster, setCurrentPoster] = useState([]);


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
  getOtherMovie();
}

function getOtherMovie(){
  // re-rendered the component
  //props.onAdd(note);
  fetch('/getmovie').then(response => response.json())
  .then(data => {
    setCurrentTitle(data.title);
    setCurrentYear(data.year);
    setCurrentPoster(data.poster);
    });
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

function Swipe(props) {
  return (

    <form className="create-note">
            
              <input
                name="title"
                onChange={handleChange}
                value={currentTitle}
                
              />
            

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
              <Fab style={{color: "red"}} onClick={getOtherMovie}>
                <HeartBrokenIcon />
              </Fab>

          </form>

  );
}
    return (
      <div>

      <div>
           <Welcome/>
      </div>

        <div>
          <Genres queryByMovieTitle="switch movie"/>
        </div>

        <div>
          <Swipe/>
        </div>
      </div>
      
      );
}


export default Home;

const button_styling2 ={
  border: '1px solid',
  borderColor: '#09B5F6',
  borderRadius: "10px",
  width: '350px',
  color: "#09B5F6",
  fontWeight: "bold",
  backgroundColor: "white"
}

const imgStyle ={
  height: "200px",
  width: "300px"
}

const containerStyles={
  height: "100vh",
  width: "6000px",
  background: "linear-gradient(to right, #0E98CD, #83CAE5)",
  alignPropType: 'center',
  textAlign: "center",

}

const headerStyles ={
  backgroundImage: "linear-gradient(to right, #0E98CD, #83CAE5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight:"bold",
  paddingBottom: "40px"
}
const cardStyle ={
  alignPropType: "center",
}

const beauty_touchup ={
  border: '1px transparent',
  borderRadius: '20px',
  width: '15rem'
}
const button_styling = {
  border: '1px solid',
  borderColor: '#09B5F6',
  borderRadius: "10px",
  width: '100px',
  color: "#09B5F6",
  fontWeight: "bold",
  backgroundColor: "white"
}
