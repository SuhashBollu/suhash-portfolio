import React from 'react';
import { Line } from 'rc-progress';
import './SkillCard.css';

const skillCard = (props) => (
    <div className="SkillCard">
        <div className="SkillDesc">
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
        </div>
        <div className= "SkillLevel">
            <Line percent={props.level} strokeWidth="4" trailWidth="4" strokeColor="steelblue" />
        </div>
    </div>
);

export default skillCard;