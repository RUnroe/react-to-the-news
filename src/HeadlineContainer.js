import React from 'react';
import Headline from './Headline.js';

const HeadlineContainer = props => {
    return (
        <section id="HeadlineContainer">
            {props.headlines.map(headline => ( <Headline headline={headline} />))}
        </section>
    );
}


export default HeadlineContainer; 