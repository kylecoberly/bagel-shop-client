import React from "react"
import "./BagelListing.css"

export default function BagelListing(props){
    return (
        <div>
            <p>{props.type}: {props.rating}</p>
        </div>
    )
}
