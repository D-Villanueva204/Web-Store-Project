import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { Nav } from "../nav/Nav";

export function Layout() {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
        </>
    )
}