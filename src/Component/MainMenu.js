import { useContext } from "react";
import React  from "react";
import { QuizContext } from "../Helpers/ContextApi";
import  "../App.css";


function MainMenu(){

        const {gamestate,setGameState} =useContext(QuizContext)

    return(<div className="Menu">
    <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    

    </div>)
}
export default MainMenu;