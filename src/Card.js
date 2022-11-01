import React from "react";

import "./Card.css";

function Card(props)
{
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <section>
                <p>{props.likes}</p>
                <button className="likeButton" onClick={props.click.bind(this, props.name, props.likes)}>Like</button>
            </section>
        </div>
    );
}

export default Card;