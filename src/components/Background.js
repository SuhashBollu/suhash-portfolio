import React from 'react';
import { Chrono } from 'react-chrono';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Background.css';

const items = [{
    title: "August 2019",
    cardTitle: "MS in CS"
},
{
    title: "June 2017",
    cardTitle: "TCS"
}];

const background = (props) => (
    <div className="Background">
        <h1 className="title">Background</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'1px solid white' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2019 - 2021"
                iconStyle={{ background: '#192841', color: '#fff', display:'none' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">MS in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University at Buffalo</h4>
                <p>
                    Courses: Algorithms, Databases
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'1px solid white' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2017 - 2019"
                iconStyle={{ background: '#192841', color: '#fff', display:'none' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services</h4>
                <p>
                    Spring Batch, JAX-WS Web Clients, Oracle SQL Developer
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'1px solid white' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2013 - 2017"
                iconStyle={{ background: '#192841', color: '#fff', display:'none' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
                <h4 className="vertical-timeline-element-subtitle">SASTRA University</h4>
                <p>
                    Programming in C,C++, RDBMS, Unix Operating System
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
);

export default background;