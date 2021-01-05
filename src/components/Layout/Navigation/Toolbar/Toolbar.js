import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerClicked}/>
        <NavLink className="link" to="/" ><h1>Suhash Bollu</h1></NavLink>
        <nav className="DesktopOnly">
            <NavigationItems/>
            {/* <NavLink className="button" to="/" >Say Hello</NavLink> */}
        </nav>
        
    </header>
);

export default toolbar;