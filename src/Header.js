import React from "react";
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
            <Link to='/'>
            <img
            className="header__logo" 
            src="https://cdn.worldvectorlogo.com/logos/bumble-1.svg" 
            alt="bumble logo"
            />
            </Link>

            <Link to='/chat'>
            <IconButton>
            <ChatBubbleIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;