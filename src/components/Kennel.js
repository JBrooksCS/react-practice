import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import Joke from "./joke/joke"


export default class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        id: 75,
        type: "general",
        setup: "How do you help a lemon in need?",
        punchline: "Lemonaid",
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }

    setNewJokeState = (jokeObj) => {
        this.setState({
            id: jokeObj.id,
            type: jokeObj.type,
            setup: jokeObj.setup,
            punchline: jokeObj.punchline
        })
    }

    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList employees={this.state.employees} />
                <hr />
                <Joke type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    setNewJokeState={this.setNewJokeState} />
            </div>
        );
    }

    //setNewJokeState calls setState, which immediately calls render
    //
}