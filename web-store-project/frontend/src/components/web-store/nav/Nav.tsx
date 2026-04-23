import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./Nav.css"
import { NavLink } from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <div className="page-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                 <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}