import React, { Component } from 'react';
import './App.css';

import BagelList from "./BagelList"
import AddNewBagel from "./AddNewBagel"
import FilterBox from "./FilterBox"

const BASE_URL = "https://bagel-api-fis.herokuapp.com"

class App extends Component {
    state = {
        bagels: [],
        isAddNewBagelShowing: false,
        searchTerm: "",
    }
    filteredBagels = () => this.state.bagels
        .filter(bagel => bagel.type && bagel.rating)
        .filter(bagel => {
            return bagel.type
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
        })
    updateSearchTerm = event => {
        this.setState({
            searchTerm: event.target.value,
        })
    }
    componentDidMount(){
        const url = `${BASE_URL}/bagels`
        fetch(url)
            .then(response => response.json())
            .then(bagels => {
                this.setState({ bagels })
            })
    }
    deleteBagel = id => {
        fetch(`${BASE_URL}/bagels/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => {
            this.setState({
                bagels: this.state.bagels.filter(bagel => bagel.id !== id)
            })
        })

    }
    postBagel = bagel => {
        fetch(`${BASE_URL}/bagels`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bagel)
        }).then(response => response.json())
        .then(bagel => {
            this.setState({
                bagels: [...this.state.bagels, bagel],
            })
        })

    }
    toggleAddNewBagel = () => {
        this.setState({
            isAddNewBagelShowing: !this.state.isAddNewBagelShowing
        })
    }
    render(){
        return (
            <div className="App">
                <header>
                    <h1>Bagel Shop</h1>
                </header>
                <main>
                    <FilterBox
                        searchTerm={this.state.searchTerm}
                        updateSearchTerm={this.updateSearchTerm}
                    />
                    <section>
                        <h2>Bagels</h2>
                        <BagelList
                            bagels={this.filteredBagels()}
                            deleteBagel={this.deleteBagel}
                        />
                    </section>
                    <button onClick={this.toggleAddNewBagel}>
                        {
                            this.state.isAddNewBagelShowing
                                ? "-"
                                : "+"
                        }
                    </button>
                    {
                        this.state.isAddNewBagelShowing
                            ? <AddNewBagel addBagel={this.addBagel} />
                            : null
                    }
                </main>
            </div>
        );
    }
}

export default App;
