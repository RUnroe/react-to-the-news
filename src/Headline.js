import React from 'react';

const Headline = props => {

    return(
    <a href={props.headline.url} target="_blank">
        <div>
            <div className="image" style={{backgroundImage: "url("+props.headline.urlToImage+")" }} />
            <p className="title">{props.headline.title}</p>
            <p className="author">{props.headline.author}</p>
            <p className="desc">{props.headline.description}</p>
         </div>   
    </a>
    )
}


export default Headline; 