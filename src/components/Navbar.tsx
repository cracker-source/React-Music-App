import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo"
import SearchIcon from "../assets/icons/SearchIcon";

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <Fragment>
            <div className={`px-6 fixed inset-0 w-full z-10  h-[80px] ${scrolled ? "bg-[#002F63]" : "bg-transparent"}`}>
                <div className="flex items-center justify-between h-[80px]">
                    <div className="flex items-center">
                        <span className="mr-4"><Logo /></span>
                        <span className="text-white text-2xl font-semibold">MusiQ</span>
                    </div>

                    <Link to='/search' className="text-white p-2 cursor-pointer flex items-center gap-3 border border-white rounded-md">
                        <p className="">Search</p>
                        <SearchIcon />
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar