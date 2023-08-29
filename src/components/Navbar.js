import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../main.css";
import { logo } from "../images";


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>

            <img
                src={ logo }
                alt="logo"
                width={220}
                height={60}
            />
            <nav ref={navRef}>
                <a className="hover-underline-animation" href="/#">Home</a>
                <a className="hover-underline-animation" href="/#">Events</a>
                <a className="hover-underline-animation" href="/#">Sponsors</a>
                <a className="hover-underline-animation" href="/#">The Team</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>


    );

}

export default Navbar;