import { React, useState, useContext } from 'react'
import "../App.css";
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from "../Helpers/ContextApi";

function Quiz() {
    const [currQuestion, setcurrQuestion] = useState(0)

    const [optionChosen, setOptionChosen] = useState("")


    const { score, setScore, setGameState } = useContext(QuizContext)

    const nextQuestion = () => {
        if (Questions[currQuestion].Answer == optionChosen) {
            setScore(score + 1)

        }
        // console.log(score)
        // alert(score);
        setcurrQuestion(currQuestion + 1)

    };

    const finishquiz = () => {
        if (Questions[currQuestion].Answer == optionChosen) {
            setScore(score + 1);

        }

        setGameState("endScreen");

    }



    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}{""}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}{""}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}{""}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}{""}</button>
            </div>
            {
                currQuestion == Questions.length - 1 ? (<button   className='w' onClick={finishquiz}> Finish Quiz</button>) :

                    (
                        <button className='P' onClick={nextQuestion}>Next Question</button>

                    )}

            {/* <button className='P'>Previous Question</button> */}


        </div>
    )
}

export default Quiz;
