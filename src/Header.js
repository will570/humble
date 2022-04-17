import React, { useEffect, useState } from "react";
import './Header.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import logo from './Untitled_Artwork.png';
import { IconButton } from "@mui/material";
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Link } from 'react-router-dom';

function Header(){
    let theme = "day";

    return (
        <div className="header">
            <IconButton onClick={function() {
                theme = theme == "day" ? "night" : "day";
                document.documentElement.style.setProperty("--themecolor", theme=="day" ? "rgb(41, 27, 72)" : "rgb(118, 94, 171)");
            }}>
            <Brightness6Icon className="header__icon" fontSize="large"/>
            </IconButton>
            
            <Link to='/'>
            <img
            className="header__logo" 
            src={logo} 
            alt="bumble logo"
            />
            </Link>

            <Link to='/info'>
            <IconButton>
            <PlayArrowIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;