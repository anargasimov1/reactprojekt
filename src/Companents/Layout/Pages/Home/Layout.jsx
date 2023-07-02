import { Outlet } from "react-router-dom"
import Navbar from "../../../Navbar/Navbar"
import Contact from "../../../Contact/Contact"

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Contact />

        </>
    )
}
