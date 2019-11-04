import React from "react"
import "./AddNewBagel.css"
import BagelForm from "./BagelForm.js"

export default function AddNewBagel(props){
    return (
        <section className="add-bagel">
            <h2>Add a bagel</h2>
            <BagelForm handleSubmit={props.addBagel} />
        </section>
    )
}
