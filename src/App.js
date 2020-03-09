import React from "react"
import Header from "./components/Header"
import { Route } from "react-router-dom"
import Shop from "./pages/shop"
import Cart from "./pages/cart"

function App(){
    return(
        <div>
            <Header />
            {/* <h1>Hi There</h1> */}
            <Route exact path="/">
                <Shop />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </div>
        
    )
}
export default App