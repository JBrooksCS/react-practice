import React, { Component } from 'react'
import AnimalItem from './AnimalItem'
import dog from "./DogIcon.svg"


class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img alt="" src={dog} className="icon--dog" />
                            <button type="button"
                                className="btn btn-success animal--btn"
                                onClick={() => {
                                    this.props.history.push("/animals/new")
                                }
                                }>
                                Admit Animal
                    </button>
                        </h5>
                    </div>
                </div>
                {
                    this.props.animals.map((item) => {

                        return <AnimalItem key={item.id} animal={item} deleteAnimal={this.props.deleteAnimal} />
                    })
                }
            </section>
        )
    }
}

export default AnimalList