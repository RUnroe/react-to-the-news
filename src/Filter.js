import React from 'react';
import Source from './Source.js';

const Filter = props => {
    return(
    <section id="Filter">
        <div id="FilterBar">
            <div id="logo"></div>
            <div id="sourcesList">
                {props.sources.map(source => (
                    <Source data={source} onClick={props.onClick}/>
                ))}
            </div>
            <div id="navIcon"></div>
        </div>
        <h2>{props.selectedSource}</h2>
    </section>
    );
}


export default Filter; 