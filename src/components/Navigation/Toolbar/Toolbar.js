import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle.js/DrawerToggle';

const toolbar = (props) => (
    <header className='Toolbar'>
        <div><DrawerToggle clicked={props.opened}></DrawerToggle></div>
        <div className='Lo'>
            <Logo />
        </div>
        
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;