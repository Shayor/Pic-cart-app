import React, { useContext } from "react"
import {Context} from "../AppContext"
import Image from "../components/image"

function Shop(){
    const {allPhotos,cartItems} = useContext(Context)
    const imageElements = allPhotos.map(photo=> <Image key={photo.id} img={photo}/>)
    // console.log(cartItems)
    return(
        <div>
            <div className="banner">
                <h2>Welcome to Pic Cart Pic</h2>
                <p>We are please to have you here</p>
            </div>
            <div className="card-columns">
                {imageElements}
            </div>
        </div>
    )
}

export default Shop