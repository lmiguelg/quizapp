import React,{ useEffect, useState } from 'react';

const Question = ({item, onAnswerSelected}) => {
    const [answers, setAnswers] = useState([]);
    const [userAnswered, setUserAnswered] = useState(false);
 

    useEffect(() => {
        let randPosition = Math.floor(Math.random() * (item.incorrect_answers.length+1) );
        let answers = item.incorrect_answers;
        answers.splice(randPosition,0,item.correct_answer);
        let answersObj = [];
        answers.forEach(answer => {
            let item = "";
            if(answer === item.correct_answer)
                item = {answer: answer, isCorrect: true}
            else 
                item = {answer: answer, isCorrect: false}

            answersObj.push(item);
        });
        setAnswers(answersObj);

    }, [item]);

    if(userAnswered){

    }
    else{

    }
    return (
        <div className="row">
            <div className="col-md-12">
                <span className="badge badge-pill badge-primary">{item.category}</span>
                {item.difficulty === 'easy' ?<span className="badge badge-pill badge-success ml-2">{item.difficulty}</span>:null}
                {item.difficulty === 'medium' ?<span className="badge badge-pill badge-warning ml-2">{item.difficulty}</span>:null}
                {item.difficulty === 'hard' ?<span className="badge badge-pill badge-danger ml-2">{item.difficulty}</span>:null}
                    
                <h5 dangerouslySetInnerHTML={{__html: item.question}}></h5>
                <ul className="list-group">
                    {answers.map((answer, index) => <li 
                        key={index} 
                        className="list-group-item list-group-item-action"
                        dangerouslySetInnerHTML={{__html: answer.answer}} 
                        onClick={()=>{ 
                            onAnswerSelected(answer.answer,item.correct_answer);
                            setUserAnswered(true);
                  
                    }}></li>)}
                </ul>

            </div>
        </div>
    );
};

export default Question;