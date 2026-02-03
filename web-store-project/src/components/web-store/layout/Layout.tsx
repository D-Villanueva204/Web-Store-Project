import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { Nav } from "../nav/Nav";
import Sidebar from "../sidebar/sidebar";

export function Layout() {
    return (
        <>
            <Nav />
            <Header />
            <Sidebar/>
            <Outlet />
        </>
    )
}