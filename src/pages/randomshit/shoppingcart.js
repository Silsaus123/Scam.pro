import * as React from "react"
import "./shoppingcart.css"
import { CiShoppingCart } from "react-icons/ci";

function ShoppingCart() {
    return (
    <div className="shoppingCart">
        <button className="shoppingCartButton"><CiShoppingCart size={25}/></button>
        <p>Shopping Cart</p>
    </div>        
    )
}

export default ShoppingCart