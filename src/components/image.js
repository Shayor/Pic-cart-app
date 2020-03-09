import React, { useState,useContext } from "react"
import {Context} from "../AppContext"
import PropTypes from 'prop-types';

function Image({img}){
    const [hovered, setHovered] = useState(false);
    const {toggleFavorite,cartItems,addCartItems,removeCartItems} = useContext(Context)
    const isFound = cartItems.some(data=>data.id===img.id)
    function add(){
        if (isFound){
            return <span className="added red" onClick={()=>removeCartItems(img.id)}>Added</span>
        }else if(hovered){
            return <span className="fa fa-plus add" onClick={()=>addCartItems(img)}></span>
        }
    }
    // const add = <span className="fa fa-plus add" onClick={()=>addCartItems(img)}></span>
    const favourite =<span className={`fa fa-heart favourite ${ img.isFavorite && "red"}` }
    onClick={()=>toggleFavorite(img.id)}
    >
    </span>
    // console.log(cartItems)
    return(
        <div className="card" 
            onMouseEnter ={()=>img.isFavorite || isFound ?null : setHovered(true)}
            onMouseLeave ={()=>img.isFavorite || isFound ?null :setHovered(false)}
        >
            <div className="overlay"></div>
                <img src={img.url} alt={""}/>
                {
                    hovered &&
                    <div>
                        {favourite}
                        {add()}
                    </div>
                }
            
        </div>
        
    )
}
Image.propTypes={
    img : PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
      })
}

export default Image