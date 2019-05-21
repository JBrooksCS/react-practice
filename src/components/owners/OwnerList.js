import React, { Component } from 'react'
import OwnerItem from './OwnerItem'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                {
                    this.props.owners.map((item) => {

                        return <OwnerItem key={item.id} owner={item}
                        deleteOwner={this.props.deleteOwner} />
                    })
                }
            </section>
        )
    }
}

export default OwnerList