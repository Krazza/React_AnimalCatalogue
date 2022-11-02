import React from "react";
import { animals } from "./animals";
import Card from "./Card";

import "./App.css";

class App extends React.Component
{
    constructor()
    {
        super();
        this.Like = this.Like.bind(this);
        this.Dislike = this.Dislike.bind(this);
        this.CreateList = this.CreateList.bind(this);
        this.RemoveCard = this.RemoveCard.bind(this);
        this.Search = this.Search.bind(this);
        this.state = {
            zoo : animals, // ASK
            search: ""
        };
    }

    render()
    {
        return(
            <div className="container">
                <input type="text" id="search" onChange={this.Search} placeholder="Search"/>
                <this.CreateList />
            </div>
        );
    }
    //event.target.value

    Search(event)
    {
        // onChange of value
        // look into the zoo for appropriate animals
        this.setState({search: event.target.value });
    }

    CreateList()
    {
        const animalFilter = this.state.zoo.filter(animal =>
        animal.name.toLowerCase().includes(this.state.search.toLowerCase()));

        const animalsList = animalFilter.map(animal => 
        <Card key={animal.name} name={animal.name} 
        likes={animal.likes} click={this.Like} 
        dislike={this.Dislike} close={this.RemoveCard}/>);
        return animalsList;
    }

    Like(name)
    {
        let temp = [...this.state.zoo];
        let tempInd = this.state.zoo.findIndex(animal => animal.name === name);
        temp[tempInd].likes += 1;

        this.setState({zoo : temp});
    }

    Dislike(name)
    {
        let temp = [...this.state.zoo];
        let tempInd = this.state.zoo.findIndex(animal => animal.name === name);
        temp[tempInd].likes -= 1;

        this.setState({zoo : temp});
    }

    RemoveCard(name)
    {
        let temp = [...this.state.zoo];
        let tempInd = this.state.zoo.findIndex(animal => animal.name === name);
        
        if(tempInd !== null)
            temp.splice(tempInd, 1);
        
        this.setState({zoo : temp});
    }

}

export default App;