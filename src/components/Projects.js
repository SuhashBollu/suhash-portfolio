import React from 'react';
import './Projects.css';
import Card from './UI/Cards/Card';
import DS from '../assets/images/ds.jpg';
// import Photo from '../../assets/images/ds.jpg';
import App from '../assets/images/app.png';
import CV from '../assets/images/cv.jpg'; 
import RS from '../assets/images/rec.jpg';
import IR from '../assets/images/ir.png';

const projs = [
    { image: App, title: 'Mobile Application', desc: 'Cross Platform Mobile Application', link: 'https://drive.google.com/open?id=1L1shSDe-NShp5nTcK-v8DZsy2Z5jDJCn', link_name: 'Demo Video' },
    { image: DS, title: 'Distributed Systems', desc: 'Simple Amazon Dynamo', link: 'https://github.com/SuhashBollu/Distributed-Systems/tree/master/SimpleDynamo', link_name: 'GitHub' },
    { image: DS, title: 'Distributed Systems', desc: 'Group Messenger', link: 'https://github.com/SuhashBollu/Distributed-Systems/tree/master/GroupMessenger2', link_name: 'GitHub' },
    { image: DS, title: 'Distributed Systems', desc: 'Simple Distributed Hash Table', link: 'https://github.com/SuhashBollu/Distributed-Systems/tree/master/SimpleDht', link_name: 'GitHub' },
    { image: CV, title: 'Computer Vision', desc: 'Panorama, Image Segmentation', link: 'https://github.com/SuhashBollu/Computer-Vision-Image-Processing', link_name: 'GitHub' },
    { image: RS, title: 'Recommendation System', desc: 'A Simple Movie Recommendation System', link: 'https://github.com/SuhashBollu/Recommendation-System', link_name: 'GitHub' },
    { image: DS, title: 'Distributed Systems', desc: 'Simple Messenger', link: 'https://github.com/SuhashBollu/Distributed-Systems/tree/master/SimpleMessenger', link_name: 'GitHub' },
    { image: IR, title: 'Information Retrieval', desc: 'Inverted Index', link: 'https://github.com/SuhashBollu/Information-Retrieval', link_name: 'GitHub' }
];

const posts = projs.map(post=>{
    return <Card image={post.image} title={post.title} desc={post.desc} link={post.link} link_name={post.link_name}/>
});

const projects = (props) => (
    <div className="Projects">
        {/* <h1>Projects</h1> */}
        <div className="container">
        {posts}
        </div>
    </div>
);

export default projects;