import React from 'react';
import {Link} from "react-router-dom";

function StartQuiz(props) {
    return (
        <div className="row mt-4">
            <div className="jumbotron col-10 offset-1">
                <h1 className="text-center">Welcome</h1>
                <div className="d-flex justify-content-center">
                    <a href="/quiz" onClick={() => this.location.reload()} className="btn btn-primary">Let's start!</a>

                </div>
            </div>
        </div>
    );
}

export default StartQuiz;