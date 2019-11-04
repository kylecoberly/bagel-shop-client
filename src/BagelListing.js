import React from "react"
import "./BagelListing.css"

export default function BagelListing(props){
    const deleteBagel = event => {
        props.deleteBagel(props.id)
    }
    const editBagel = event => {
        props.editBagel(props.id)
    }
    return (
        <div className="bagel-listing">
            <p>{props.type}: {props.rating}</p>
            <span>
                <i className="fa fa-pencil" onClick={editBagel}></i>
                <i className="fa fa-times-circle" onClick={deleteBagel}></i>
            </span>
        </div>
    )
}
