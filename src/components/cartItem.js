import React, {useContext} from "react"
import {Context} from "../AppContext"

function CartItem({item}){
    const {removeCartItems} = useContext(Context)
    return(
        <div className="cartItem" key={item.id}>
            <img src={item.url} alt={""}/>
            <span className="fa fa-trash delete" onClick={()=>removeCartItems(item.id)}></span>
            <span className="price">{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
            <hr />
        </div>
    )
}
export default CartItem