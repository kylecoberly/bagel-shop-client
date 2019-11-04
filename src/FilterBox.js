import React  from "react"
import "./FilterBox.css"

export default function FilterBox(props){
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    placeholder="Search for a bagel"
                    value={props.searchTerm}
                    onChange={props.updateSearchTerm}
                />
            </form>
        </section>
    )
}
