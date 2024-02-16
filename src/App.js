
import './App.css';
import React, { useState, useContext } from 'react'
import MainMenu from './Component/MainMenu';
import Quiz from './Component/Quiz';
import End from './Component/End';
import { QuizContext } from './Helpers/ContextApi';

function App() {
  const [gamestate, setGameState] = useState("menu");
  const [score,setScore]= useState(0)



  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <QuizContext.Provider value={{gamestate,setGameState,score,setScore}} >
        {gamestate === "menu" && <MainMenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "end" && <End />}
      </QuizContext.Provider>


    </div>
  );
}

export default App;
