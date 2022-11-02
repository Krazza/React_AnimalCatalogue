import React from "react";

import "./Card.css";

function Card(props)
{
    return(
        <div className="card">
            <button className="closeButton" onClick={props.close.bind(this, props.name)}>X</button>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt="kek"  />
            <h2>{props.name.toUpperCase()}</h2>
            <section>
                <p>{props.likes}</p>
                <button className="likeButton" onClick={props.click.bind(this, props.name, props.likes)}>Like</button>
            </section>
        </div>
    );
}

export default Card;