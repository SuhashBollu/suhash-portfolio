import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem name="Projects" link="/projects"/>
        <NavigationItem name="Background" link="/background"/>
        <NavigationItem name="Skills" link="/skills"/>
        <NavigationItem name="Contact" link="/contact"/>
        {/* <NavigationItem/> */}
    </ul>
);

export default navigationItems;