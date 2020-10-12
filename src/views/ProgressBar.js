import React from 'react';

function ProgressBar({width}) {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: width+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{width +"%"}</div>
        </div>
    );
}

export default ProgressBar;