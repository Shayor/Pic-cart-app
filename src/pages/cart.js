import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import {Context} from "../AppContext"
import CartItem from "../components/cartItem"

function Cart(){
    const {cartItems,emptyCart} = useContext(Context)
    const [shippingPrice] = useState(40)
    const [buttonText, setbuttonText] = useState("Place Order") 
    const [disabled, setDisabled] = useState(false)
    const cartItem = cartItems.map(item=><CartItem item={item}/>)
    const subtotalPrice = 
    cartItems.reduce((initVal, item)=>{
        return initVal + item.price
    },0)
    const totalPrice = subtotalPrice + shippingPrice

    function changeText(){
        setbuttonText("Ordering...")
        setDisabled(true)
        setTimeout(()=>{
            console.log("Order Placed");
            setDisabled(false)
            setbuttonText("Place Order")
            emptyCart()
        },3000)
    }
    return(
        <div className="cartPage">
            <h2>Welcome to Cart</h2>
            <hr />
            {cartItem}
            {cartItems.length >=1 &&
                <div className="totalAmount">
                <p>SubTotal : {subtotalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                <hr />
                <p>Shipping : {shippingPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                <hr />
                <p>Total : {totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            </div>}
            {cartItems.length >=1 ?
                <button className="btn btn-primary" onClick={changeText} disabled={disabled}>{buttonText}</button>
                :
                <div>
                    <p>There is no item in your cart</p>
                    <Link to="/">Shop Now</Link>
                </div>
            }
        </div>
    )
}

export default Cart