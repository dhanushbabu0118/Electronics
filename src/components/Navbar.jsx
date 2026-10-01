import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ darkMode, setDarkMode }) {
    const { cart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link to="/" className="logo">
                <h2>B O A T</h2>
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Navigation */}
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>

                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </Link>

                <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </Link>

                <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                >
                    Login
                </Link>

                <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                >
                    Sign Up
                </Link>

                <Link to="/cart" className="cart-link">
                    🛒 Cart ({cart.length})
                </Link>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>

            </div>

        </nav>
    );
}

export default Navbar;