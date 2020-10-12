import React from 'react';
import Question from './Question'

const Turn = ({ items }) => {
    if(items === null){
        return (
            <div>
                <p>questions not found</p>
            </div>
            
        )
    }
    else{
        return (
            <div className="row">
                <div className="jumbotron col-10 offset-1 mt-2">
                    {items.map((item) =><div><Question item={item}/></div> )}
                </div>
            </div>
            
    );
    }
  
    
};

export default Turn;