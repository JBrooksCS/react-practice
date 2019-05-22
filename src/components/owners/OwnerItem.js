import React, { Component } from 'react';

class OwnerItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.owner.id)
        this.props.deleteAnimal(this.props.owner.id)
    }

    render() {
        return (
            <article>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.owner.name}
                            <button onClick={this.handleClick}>Delete</button>
                        </h5>
                    </div>
                </div>
            </article>
        )
    }
}

export default OwnerItem;