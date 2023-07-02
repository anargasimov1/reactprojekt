import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [modal, setModal] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="nav_left">
                    <a href="#">
                        <img src="https://anargasimov1.github.io/projekt/src/images/logo.png.webp" alt="logo" />
                    </a>
                    <Link to="/">Home</Link>
                    <Link to="/second">Product</Link>
                    <Link to="/about">About</Link>
                    <Link to="/bloq">Blog</Link>
                    <Link to="/footer">Contact</Link>
                </div>
                <div className="nav_rigth">
                    <a href="">
                        <i className="fa-solid fa-phone"></i>
                        +994 (55) 701 90 50
                    </a>
                    <a href="">
                        Order Online
                    </a>
                </div>
            </nav>
            <nav className="nav_hidden">
                <button onClick={() => setModal(!modal)} className="btn" type="button">MENU<i className="fa-solid fa-bars"></i></button>
                <div style={modal ? { height: "200px" } : {height:"0"}} className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/second">Product</Link>
                    <Link to="/about">About</Link>
                    <Link to="/bloq">Blog</Link>
                    <Link to="/footer">Contact</Link>
                </div>
            </nav>



        </>
    )
}
