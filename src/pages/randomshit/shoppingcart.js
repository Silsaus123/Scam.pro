import * as React from "react"
import "./shoppingcart.css"
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
    const navigate = useNavigate()

    const onclickRoute = () => {
        navigate("/shoppingCartPage")
    }
    return (
    <div className="shoppingCart">
        <button className="Button">
            <CiShoppingCart size={25} onClick={onclickRoute}/>
        </button>
    </div>   
    )
}

export default ShoppingCart