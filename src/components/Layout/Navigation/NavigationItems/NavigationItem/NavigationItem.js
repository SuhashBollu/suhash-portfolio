import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className="NavigationItem">
        <NavLink to={props.link} activeClassName="active">
            {props.name}
        </NavLink></li>
);

export default navigationItem;