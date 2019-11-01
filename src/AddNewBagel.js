import React, { Component } from "react"
import "./AddNewBagel.css"

export default class AddNewBagel extends Component {
    state = {
        newBagel: {
            type: "",
            rating: 5,
        }
    }
    handleChange = property => event => {
        const newBagel = this.state.newBagel
        newBagel[property] = event.target.value
        this.setState({ newBagel })
    }
    addBagel = event => {
        event.preventdefault()

        const { type, rating } = this.state.newBagel
        this.props.postBagel({ type, rating })

        this.setState({
            newBagel: {
                type: "",
                rating: 5,
            }
        })
    }
    render(){
        return (
            <section className="add-bagel">
                <h2>Add a bagel</h2>
                <form onSubmit={this.addBagel}>
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
                    <input type="submit" value="Add Bagel" />
                </form>
            </section>
        )
    }
}
