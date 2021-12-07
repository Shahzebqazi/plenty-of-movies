import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Note from "./Note";
import Signup from './Signup';

function App() {
 

  const [visible, setVisible ] = React.useState(true,false);
  

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function hideHome(){
    setVisible (!visible);
  }

return (
    <div>      

      {/* <Router>
        <Header />
        <br/>
        <Routes>
          <Route path="/login"  element={<Login />} />

          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Router> */}
      
      {/* < button onClick={() => {hideHome();}}> Login </button> */}
      {visible && <button onClick={() => {hideHome();}}> Login </button>}
      {visible && <Home onAdd={addNote} /> || <Login /> }
      {visible && <Footer />  }

     
      

      {notes.slice(0).map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

    </div>
  );
}


export default App;