import React, { Component } from 'react'
import LocationItem from './LocationItem'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map((item) => {

                    return <LocationItem key={item.id} location={item}
                    deleteLocation={this.props.deleteLocation} />
                    })
            }
            </section>
        )
    }
}

export default LocationList