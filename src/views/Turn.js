import React, { useState } from 'react';
import Question from './Question'
import EndGameScreen from './EndGameScreen'
import ProgressBar from './ProgressBar'

const Turn = ({ items }) => {

    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const onAnswerSelected = (answer, correctAnswer) =>{
        let isCorrect = false;
        if( answer === correctAnswer){
            isCorrect = true;
            setScore(score + 10);
        }
        if(questionIndex < 5) setQuestionIndex(questionIndex + 1);

        return isCorrect;
    }

    if(items === null) return <div></div>
    else{
        return (
            <div className="row">
                <div className="jumbotron col-10 offset-1 mt-2">
                    <div className="col-2  offset-9">
                        <h4>Score: <span className="badge badge-secondary">{score}</span></h4>
                    </div>
                    <div>
                        {questionIndex === 5 ? <EndGameScreen score={score}/>:<Question item={items[questionIndex]} onAnswerSelected={onAnswerSelected}/>}
                        
                    </div>
                    
                </div>
                {questionIndex !== 5 ? 
                    <div className="col-10 offset-1">
                        <ProgressBar width={questionIndex*20}/>
                    </div>:null}
                
            </div>
            
        );
    }
};

export default Turn;