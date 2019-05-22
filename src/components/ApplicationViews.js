import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"

import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'

import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"

import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }
    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(() => AnimalManager.getAll()
                .then(animals => {
                    console.log("animals", animals);
                    newState.animals = animals
                })) //her notes have })
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    }
    addAnimal = (animal) =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    deleteEmployee = (id) => {
        const newState = {};
        EmployeeManager.deleteEmployee(id)
            .then(() => EmployeeManager.getAll()
                .then(employees => {
                    console.log("employees", employees);
                    newState.employees = employees
                })) //her notes have })
            .then(() => this.setState(newState))
    }
    deleteLocation = (id) => {
        const newState = {};
        LocationManager.deleteLocation(id)
            .then(() => LocationManager.getAll()
                .then(locations => {
                    console.log("locations", locations);
                    newState.locations = locations
                })) //her notes have })
            .then(() => this.setState(newState))
    }
    deleteOwner = (id) => {
        const newState = {};
        OwnerManager.deleteOwner(id)
            .then(() => OwnerManager.getAll()
                .then(owners => {
                    console.log("owners", owners);
                    newState.owners = owners
                })) //her notes have })
            .then(() => this.setState(newState))
    }
    componentDidMount() {
        const newState = {};
        AnimalManager.getAll()
            .then(allAnimals => { newState.animals = allAnimals })
            .then(_next => LocationManager.getAll())
            .then(allLocations => { newState.locations = allLocations })
            .then(_next => EmployeeManager.getAll())
            .then(allEmployees => { newState.employees = allEmployees })
            .then(_next => OwnerManager.getAll())
            .then(allOwners => { newState.owners = allOwners })
            .then(_next => { this.setState(newState) })
    }
    render() {
        return (
            <React.Fragment >
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations}
                        deleteLocation={this.deleteLocation} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />

                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners}
                        deleteOwner={this.deleteOwner} />
                }} />
            </React.Fragment >
        )
    }
}
//this includes the withRouter so we can use .push for history
export default withRouter(ApplicationViews)