import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import Login from './authentication/Login'

import AnimalManager from "../modules/AnimalManager"
import AnimalList from './animal/AnimalList'
import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"
import AnimalEditForm from "./animal/AnimalEditForm"

import LocationManager from "../modules/LocationManager"
import LocationList from './location/LocationList'

import EmployeeManager from "../modules/EmployeeManager"
import EmployeeList from './employee/EmployeeList'

import OwnerManager from "../modules/OwnerManager"
import OwnerList from './owners/OwnerList'











class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
            .then(() => AnimalManager.getAll())
            .then(animals => {
                //push goes here to keep from rendering page twice
                this.props.history.push("/animals")
                this.setState({
                    animals: animals
                })
            })
    };
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
                <Route path="/login" component={Login} />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <LocationList locations={this.state.locations}
                        deleteLocation={this.deleteLocation} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <AnimalList {...props} animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
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
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} />
                } else {
                    return <Redirect to="/login" />
                }
                }}
                />

                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <OwnerList owners={this.state.owners}
                        deleteOwner={this.deleteOwner} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment >
        )
    }
}
//this includes the withRouter so we can use .push for history
export default withRouter(ApplicationViews)