import React from "react";
import { NavLink } from "react-router-dom";
import CrimsonCrossoverLogo from "./images/CrimsonCrossoverLogo.webp";
import logo from './images/ACM Logo.png'
import "./NavBar.css";

export default function NavBar() {
    return (
        <>
            <div>
                <NavLink to='/CrimsonCrossover' className='navbar'><img className = "nLogo" src={CrimsonCrossoverLogo}/></NavLink>
            </div>
            
        </>
    )
}