import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { Nav } from "../nav/Nav";
import type { Part } from "../../../../../shared/types/PartTypes";

export function Layout({ addItemToCart }: { addItemToCart: (item: Part) => void }) {
    return (
        <>
            <Header addItemToCart={addItemToCart} />
            <Nav />
            <Outlet />
        </>
    )
}