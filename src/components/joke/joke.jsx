import React, { Component } from 'react'



export default class Joke extends Component {

    tellNewJoke = () => { //fat arrow 'binds a function to a component. Youd have to do extra stuff otherwise'
        // console.log("Clicked on the tell a new joke function")
        const joke = {
            id: 1005, //no reason really
            type: "General",
            setup: "What do you call a fly with no wings?",
            punchline: "A Walk"
        }
        this.props.setNewJokeState(joke)
    }
    render() {
        return (
            <div>
                <header>Joke Type: {this.props.type}</header>
                <h2>{this.props.setup}</h2>
                <p>{this.props.punchline}</p>
                <button onClick={this.tellNewJoke}>Tell A New Joke</button>
            </div>
        )
    }
}
