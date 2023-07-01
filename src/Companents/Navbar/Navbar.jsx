import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {

    const [modal, setModal] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="nav_left">
                    <a href="#">
                        <img src="./src/images/logo.png.webp" alt="logo" />
                    </a>
                    <a href="./index.html">Home</a>
                    <a href="./praduct.html">Product</a>
                    <a href="./about.html">About</a>
                    <a href="./blog.html">Blog</a>
                    <a href="./contact.html">Contact</a>
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
                    <a href="./index.html">Home</a>
                    <a href="./praduct.html">Product</a>
                    <a href="./about.html">About</a>
                    <a href="./blog.html">Blog</a>
                    <a href="./contact.html">Contact</a>
                </div>
            </nav>



        </>
    )
}
