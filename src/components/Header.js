import React from "react"
import { Link } from "react-router-dom"
import {useContext} from "react"
import {Context} from "../AppContext"

function Header(){
    const {cartItems} = useContext(Context)
    const countItems = cartItems.length;
    return(
        <div className="header">
            <div className="header-text">
                <p><Link to="/">Pic Cart App</Link></p>
                <Link to="cart">
                    <span className="fa fa-shopping-cart cart">
                    {   countItems >=1 &&
                        <span className="count">{countItems}</span>
                    }
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default Header