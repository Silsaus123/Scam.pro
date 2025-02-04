import * as React from "react"
import "./index.css"
import "./app.css"
import MainPage from "./mainPage"

import ShoppingCartPage from "./randomshit/shoppingCartPage";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
    return (
        <> 
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/> 
                <Route path="/shoppingCartPage" element={<ShoppingCartPage/>}/> 
            </Routes>
        </HashRouter>
        </>
    )
}
export default App