import React from "react"
import ReactDOM from "react-dom";
import {render, fireEvent} from "@testing-library/react";
import { Swipe } from "./Home.jsx";



//Swipe right changes movie
it("renders correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Swipe></Swipe>,div)
})



//Swipe left changes movie and addnotes a note

//Swipe and adds a note
