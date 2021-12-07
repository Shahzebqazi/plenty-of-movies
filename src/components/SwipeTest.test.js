import React from "react"
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { Genres } from "./Home.jsx";



//Swipe right changes movie
it("renders correctly", () => {
    const {queryByTestId} = render(<Genres/>)
    expect(queryByTestId("switch movie")).toBeFalsy()
})



//Swipe left changes movie and addnotes a note

//Swipe and adds a note
