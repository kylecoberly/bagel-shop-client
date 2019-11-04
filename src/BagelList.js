import React from "react"
import "./BagelList.css"

import BagelListing from "./BagelListing"

export default function BagelList(props){
    const $bagels = props.bagels.map(bagel => {
        return <li key={bagel.id}>
            <BagelListing
                id={bagel.id}
                type={bagel.type}
                rating={bagel.rating}
                deleteBagel={props.deleteBagel}
                editBagel={props.editBagel}
            />
        </li>
    })

    return (
        <ul>{$bagels}</ul>
    )
}

