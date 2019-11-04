import React, { Component } from "react"
import "./BagelListing.css"

import BagelForm from "./BagelForm"

export default class BagelListing extends Component {
    state = {
        isFormShowing: false,
    }
    deleteBagel = event => {
        this.props.deleteBagel(this.props.id)
    }
    editBagel = bagel => {
        this.props.editBagel(this.props.id, bagel)
    }
    toggleFormShowing = () => {
        this.setState({
            isFormShowing: !this.state.isFormShowing
        })
    }
    render(){
        const { rating, type } = this.props
        return (
            <div className="bagel-listing">
                <div className="information">
                    <p>{type}: {rating}</p>
                    <span>
                        <i
                            className={
                                this.state.isFormShowing
                                ? "fa fa-pencil active"
                                : "fa fa-pencil"
                            }
                            onClick={this.toggleFormShowing}>
                        </i>
                        <i className="fa fa-times-circle" onClick={this.deleteBagel}></i>
                    </span>
                </div>
                {
                    this.state.isFormShowing
                        ? <BagelForm
                            defaultBagel={ { rating, type } }
                            buttonLabel="Edit Bagel"
                            handleSubmit={this.editBagel}
                        />
                        : null
                }
            </div>
        )
    }
}
