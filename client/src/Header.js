
import React from 'react'
import './Header.css'
import logo from './images/ACM Logo.png'
import { NavLink } from 'react-router-dom';
import CrimsonCrossoverLogo from "./images/CrimsonCrossoverLogo.webp";

export default function Header() {
  return (
    <div className='grid'>
        <div className='logo-container'>
            <NavLink to='/'><img className='logo' src={logo} alt='logo' /></NavLink>
        </div>
        <div className='header-container'>
            <h1 className='header-1'>
                The University of Alabama Association for Computing Machinery
            </h1>
            <h2 className='header-2'>
                The #1 Professional Organization for Computer Science Students
            </h2>
        </div>
        <div className='logo-container'>
            <NavLink to='/CrimsonCrossover'><img className = "logo2" src={CrimsonCrossoverLogo}/></NavLink>
        </div>
    </div>
  );
}
