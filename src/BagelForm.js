import React, { Component } from "react"
import "./BagelForm.css"

export default class BagelForm extends Component {
    state = {
        newBagel: {
            type: "",
            rating: 5,
        }
    }
    componentDidMount(){
        if (this.props.defaultBagel){
            this.setState({
                newBagel: this.props.defaultBagel
            })
        }
    }
    handleChange = property => event => {
        const newBagel = this.state.newBagel
        newBagel[property] = event.target.value
        this.setState({ newBagel })
    }
    handleSubmit = event => {
        event.preventDefault()

        const { type, rating } = this.state.newBagel
        this.props.handleSubmit({ type, rating })

        this.setState({
            newBagel: {
                type: "",
                rating: 5,
            }
        })
    }
    render(){
        return (
            <form className="bagel-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Type"
                    value={this.state.newBagel.type}
                    name="type"
                    onChange={this.handleChange("type")}
                />
                <input
                    type="number"
                    min="1"
                    max="10"
                    placeholder="Rating"
                    value={this.state.newBagel.rating}
                    name="rating"
                    onChange={this.handleChange("rating")}
                />
                <input type="submit" value={this.props.buttonLabel || "Add Bagel"} />
            </form>
        )
    }
}
