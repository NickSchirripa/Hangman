import { useState } from 'react';
import Lives from "./Lives.jsx";
import { lifeData } from './lifeData.js';

import './App.css';

export default function App() {
  const lifeElement = lifeData.map((life, index) => (
    <Lives 
      key={index}
      name={life.name}
      backgroundColor={life.backgroundColor}
      color={life.color}
    />
  ));

  return (
    <>
      <main>
        <header>
          <h1>HangMan</h1>
          <p>Guess the word within 8 attempts!</p>
        </header>
        <div className="chipsCntr">
          {lifeElement}
        </div>
      </main>
    </>
  );
}