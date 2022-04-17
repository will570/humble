import React from "react";
import './Header.css'
import InfoIcon from '@mui/icons-material/Info';
import logo from './Untitled_Artwork.png';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="header">
            <Link to='/info'>
            <IconButton>
            <InfoIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
            
            <Link to='/'>
            <img
            className="header__logo" 
            src={logo} 
            alt="bumble logo"
            />
            </Link>

            <Link to='/info'>
            <IconButton>
            <InfoIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;