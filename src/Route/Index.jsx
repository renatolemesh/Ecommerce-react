import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Carrinho } from "../pages/Carrinho";
import NavBar from "../components/NavBar";
export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/produto" element={<Produto />}></Route>
                <Route path="/carrinho" element={<Carrinho />}></Route>
                <Route path="/nav" element={<NavBar />}></Route>
            </Routes>
        </BrowserRouter>
    )
}