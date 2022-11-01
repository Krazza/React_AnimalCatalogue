import React from "react";
import Card from "./Card";
import { animals } from "./animals";

import "./App.css";

class App extends React.Component
{
    constructor()
    {
        super();
        this.Like = this.Like.bind(this);
        this.CreateList = this.CreateList.bind(this);
        this.state = {
            zoo : [...animals] // ASK
        };
    }

    render()
    {
        return(
            <div className="container">
                <this.CreateList />
            </div>
        );
    }

    CreateList()
    {
        const animalsList = this.state.zoo.map(animal => <Card key={animal.name} name={animal.name} likes={animal.likes} click={this.Like} />);
        return animalsList;
    }

    Like(name)
    {
        let temp = [...this.state.zoo];
        let tempAnimal = this.state.zoo.find(animal => animal.name === name);
        tempAnimal.likes += 1;
        this.setState({zoo : temp});
        console.log(`Current ${name} number of likes is: ${tempAnimal.likes}`);
    }
}

export default App;