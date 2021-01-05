import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props.image);
    return (
        <div className="Card">
            <div class="pic">
                <img src={props.image} alt="" />
            </div>
            <div className="info">
                <div 
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height:'25%'}}>
                    <h3>{props.title}</h3>
                </div>
                <div 
                    style={{
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center',
                        height:'30%'}}>
                    <p>{props.desc}</p>
                </div>
                <div 
                    style={{
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        height:'25%'}}>
                    <a className="button" href={props.link} target="_blank">{props.link_name}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;