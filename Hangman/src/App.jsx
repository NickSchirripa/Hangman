import { useState } from "react";
import Lives from "./Lives.jsx";
import { lifeData } from "./lifeData.js";
import { nanoid } from "nanoid";

import "./App.css";

export default function App() {
  const [currentWord, setCurrentWord] = useState("hangman");

  //state to hold array when keyboard is clicked
  const [letterClicked, setLetterClicked] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

   function addGuessedLetter(letter) {
        setLetterClicked(prevLetters => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter])
    }

  //render Live component, and pass in props
  const lifeElement = lifeData.map((life, index) => (
    <Lives
      key={index}
      name={life.name}
      backgroundColor={life.backgroundColor}
      color={life.color}
    />
  ));

  //render our word element
  const currentWordElement = currentWord
    .split("")
    .map((word) => <span key={nanoid()}>{word.toUpperCase()}</span>);

  //map over our alphabet variable, and turn them into buttons for the keyboard
  const keyboardElement = alphabet.split("").map((letters) =>{
    /////////////////NEXT STEP/////////////////////
    //Check to see if the letter was guessed  and check to see if it is in the current 
    //word. Then change its class so the background changes colors
    return(
    <button
      onClick={()=> addGuessedLetter(letters)}
      key={nanoid()}
    >
      {letters}
    </button>
  )});

  console.log(letterClicked);

  return (
    <>
      <main>
        <header>
          <h1>HangMan</h1>
          <p>Guess the word within 8 attempts!</p>
        </header>
        <section className="chipsCntr">{lifeElement}</section>
        <section className="currentWord">{currentWordElement}</section>
        <section className="keyboard">{keyboardElement}</section>
        <button className="new-game">New Game</button>
      </main>
    </>
  );
}
