import React from 'react'
import './Header.css'
import logo from './ACM Logo.png'

export default function Header() {
  return (
    <div className='grid'>
        <div className='logo-container'>
            <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='header-container'>
            <h1 className='header-1'>
                The University of Alabama Association for Computing Machinery
            </h1>
            <h2 className='header-2'>
                The #1 Professional Organization for Computer Science Students
            </h2>
        </div>
    </div>
  );
}
