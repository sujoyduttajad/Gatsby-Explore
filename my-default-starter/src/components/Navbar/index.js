import React, {useState, useEffect} from 'react'
import { IconContext } from "react-icons/lib"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: "#141414"}}>
                <Nav active={scroll} click={click}></Nav>
            </IconContext.Provider>
        </React.Fragment>
    )
}

export default Navbar
