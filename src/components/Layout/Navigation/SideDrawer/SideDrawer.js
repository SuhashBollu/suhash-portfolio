import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import "./SideDrawer.css";
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Auxi from '../../../../hoc/Auxi';

const sideDrawer = (props) => {
    let attachedClasses = "SideDrawer Close"
    if(props.open){
        attachedClasses = "SideDrawer Open"
    }
    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;