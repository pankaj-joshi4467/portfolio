import React from 'react';
import SkillCard from './skillCard';
import VisualIcon from "../res/icons/visual-studio.png";
import NodeIcon from "../res/icons/nodejs.png";
import JsIcon from "../res/icons/js.png";
import ReactIcon from "../res/icons/atom.png";
import HTMLIcon from "../res/icons/html-5.png";
import CSSIcon from "../res/icons/css-3.png";
import Subheading from './Subheading';


function SkillSection(){
    return(
        <div id="Skills" className='skill-section'>
            <Subheading content="My Prowess" />
            <div className='skill-card-wrapper'>
                <SkillCard
                    softwareAnimation={true}
                    heading="Software Development"
                    quote="“Dare to dream big; your code can reshape the world!”"
                    contentLine1="Languages I speak : Java, Python"
                    contentLine2="Proficient in using both functional and OOP."
                />
                <SkillCard
                    frontendAnimation={true}
                    heading="Frontend Dev"
                    quote='"Better web experiences start with great front end design!"'
                    contentLine1="Proficient in using HTML, CSS, JavaScript, JQuery, ReactJS, NextJS, Redux Bootstrap, TailwindCSS."
                />
                <SkillCard
                    backendAnimation={true}
                    heading="Backend Dev"
                    quote='"Make it work, make it right, make it fast.!"'
                    contentLine1="Skilled in making fully functional Secure web applications & RESTful APIs using NodeJS, ExpressJS, EJS, WebSockets, MongoDB, MySQL."
                />
            </div>
            <img className="app-icons" src={VisualIcon} alt='visual-icon' style={{left: "7%"}}></img>
            <img className='app-icons' src={NodeIcon} alt='node-icon' style={{top: "365px"}}></img>
            <img className='app-icons' src={JsIcon} alt='JS-icon' style={{top: "80px", left: "1147px"}}></img>
            <img className='app-icons' src={HTMLIcon} alt='HTML-icon' style={{top: "142px", left: "296px"}}></img>
            <img className='app-icons' src={CSSIcon} alt='CSS-icon' style={{top: "410px", left: "622px"}}></img>
            <img className='app-icons' src={ReactIcon} alt='React-icon' style={{top: "435px", left: "945px"}}></img>
        </div>
    );
}

export default SkillSection;