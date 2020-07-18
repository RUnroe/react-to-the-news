import React from 'react';

const Source = props => {
    return(
    <div key={props.data.id} className="btn vertical-align-text sourceBtn"
        onClick={() => props.onClick(props.data.id, props.data.name)}>
        {props.data.name}
    </div>
    );
}


export default Source; 