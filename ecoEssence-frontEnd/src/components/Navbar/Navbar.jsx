import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                // to-do: Alerts
            })
            .catch((error) => {
                console.error("Logout failed", error);
            });
    };

    const navLinks = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/all-products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-xl">EcoEssence</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <button className="btn btn-primary" onClick={handleLogOut}>Logout</button>
                ) : (
                    <>
                        <a href="/signin" className="btn btn-primary">Login</a>
                        <a href="/signup" className="btn btn-secondary ml-2">Sign Up</a>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;