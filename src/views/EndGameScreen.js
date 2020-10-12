import React from 'react';
import {Link} from "react-router-dom";


function EndGameScreen({score}) {
    return (
        <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading">Well done! Quiz complete</h4>
            <hr/>
            <p className="mb-0">Score: {score}</p>
            <Link to="/" className="btn btn-primary">Play Again</Link>
        </div>
    );
}

export default EndGameScreen;