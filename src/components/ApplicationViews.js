import { Route } from 'react-router-dom'
import React, { Component } from "react"

import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'

import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"


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
            .then(() => this.setState(newState))
    }
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
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} />
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

export default ApplicationViews