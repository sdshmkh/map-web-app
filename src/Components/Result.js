import React from 'react';

const Result = (props) => {
     return(
        <div className='result-container alert alert-primary'>
            <p>
                {props.name}
            </p>
            <p>
                {props.rating}
            </p>
            <p>
                {props.vicinity}
            </p>
        </div>
    );
}

export default Result;