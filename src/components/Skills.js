import React from 'react';
import './Skills.css';
import java from 'programming-languages-logos/src/java/java.svg';
import python from 'programming-languages-logos/src/python/python.svg';
import cpp from 'programming-languages-logos/src/cpp/cpp.svg';
import html from 'programming-languages-logos/src/html/html.svg';
import css from 'programming-languages-logos/src/css/css.svg';
import javascript from 'programming-languages-logos/src/javascript/javascript.svg';
import nodejs from '../assets/logos/nodejs.svg';
import mySQL from '../assets/logos/mysql-7.svg';
import mongo from '../assets/logos/mongodb.svg';
import react from '../assets/logos/react-2.svg';
import redux from '../assets/logos/redux.svg';
import azure from '../assets/logos/azure.svg';
import git from '../assets/logos/git.svg';
import rn from '../assets/logos/rn.png';
import aws from '../assets/logos/aws.svg';
import linux from '../assets/logos/tux.svg';
import SkillCard from './UI/Cards/SkillCard';


const programmingSkills = [
    {
        name: 'Java',
        image: java,
        level: "60"
    },
    {
        name: 'Python',
        image: python,
        level: "60"
    },
    {
        name: 'C++',
        image: cpp,
        level: "40"
    }];

const webSkills = [
    {
        name: 'HTML',
        image: html,
        level: "60"
    },
    {
        name: 'CSS',
        image: css,
        level: "40"
    },
    {
        name: 'JavaScript',
        image: javascript,
        level: "50"
    },
    {
        name: 'Node.js',
        image: nodejs,
        level: "40"
    }
];

const dbSkills = [
    {
        name: 'mySQL',
        image: mySQL,
        level: "70"
    },
    {
        name: 'MongoDB',
        image: mongo,
        level: "40"
    }
];

const frameworks = [
    {
        name: 'React.js',
        image: react,
        level: "70"
    },
    {
        name: 'React-Native',
        image: react,
        level: "70"
    },
    {
        name: 'Redux',
        image: redux,
        level: "40"
    }
];

const otherSkills = [
    {
        name: 'AWS',
        image: aws,
        level: "30"
    },
    {
        name: 'Azure',
        image: azure,
        level: "30"
    },
    {
        name: 'Git',
        image: git,
        level: "70"
    },
    {
        name: 'Linux',
        image: linux,
        level: "70"
    }
];

const programmingSkillCards = programmingSkills.map((skill) => <SkillCard name={skill.name} image={skill.image} level={skill.level}/>);
const webSkillCards = webSkills.map((skill) => <SkillCard name={skill.name} image={skill.image} level={skill.level}/>);
const dbSkillCards = dbSkills.map((skill) => <SkillCard name={skill.name} image={skill.image} level={skill.level}/>);
const fwSkillCards = frameworks.map((skill) => <SkillCard name={skill.name} image={skill.image} level={skill.level}/>);
const otherSkillCards = otherSkills.map((skill) => <SkillCard name={skill.name} image={skill.image} level={skill.level}/>);

const skills = (props) => (
    <div className="Skills">
        {/* <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}> */}
        <h3>Programming</h3>
        <div className="row">
            {programmingSkillCards}
        </div>
        {/* </div> */}
        <h3>Web</h3>
        <div className="row">
            {webSkillCards}
        </div>
        <h3>Database</h3>
        <div className="row">
            {dbSkillCards}
        </div>
        <h3>Frameworks</h3>
        <div className="row">
            {fwSkillCards}
        </div>
        <h3>Other Tools</h3>
        <div className="row">
            {otherSkillCards}
        </div>

    </div>
);

export default skills;