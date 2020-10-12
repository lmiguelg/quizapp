import React from 'react';

const Question = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <span className="badge badge-pill badge-primary">{item.category}</span>
                {item.difficulty == 'easy' ?<span className="badge badge-pill badge-success ml-2">{item.difficulty}</span>:null}
                {item.difficulty == 'medium' ?<span className="badge badge-pill badge-warning ml-2">{item.difficulty}</span>:null}
                {item.difficulty == 'hard' ?<span className="badge badge-pill badge-danger ml-2">{item.difficulty}</span>:null}
                
           
                
                <h5>{item.question}</h5>
                <ul className="list-group">
                    <li className="list-group-item active">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>

            </div>
            
        </div>
    );
};

export default Question;