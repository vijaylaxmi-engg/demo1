import {React , useContext  }from 'react'
import "../App.css";
import { QuizContext } from '../Helpers/ContextApi';
import { Questions } from '../Helpers/QuestionBank';

const End = () => {

  
  const { score, setScore,  
     setGameState } = useContext(QuizContext);

  const resetquiz =()=>{
    setScore(0)
    setGameState("menu")
  }

  return (
    <div className="endscreen">
    {""}

    <h1>Quiz Finish</h1>
    <h3>   
    {""}
     {score}  / {Questions.length} {""}</h3>
    <button onClick={resetquiz}>Restart Quiz</button>
    </div>
  )
}

export default End
