import React from 'react'
import { BRANDING_LOGO } from '../common-components/constant'
import { StyledHeader } from './header.styles'

function Header() {
  return (
    <StyledHeader className='header'>
        <div className='logo-container'>
            <img className='logo' src={BRANDING_LOGO} />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </StyledHeader>
  )
}

export default Header