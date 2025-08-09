import React from "react";
import Lottie from 'lottie-react';
import SoftwareAnimation from '../res/animation_c.json';
import ReactAnimation from '../res/zDsF7xR01l.json';
import NodeAnimation from '../res/animation_node.json';
import {motion} from "framer-motion";


const variants = {
    visible : {opacity: 1, y: 0,},
    hidden : {opacity: 0, y: 30,}
}

function SkillCard(props){
    return(
        <motion.div className='skill-card' initial="hidden" whileInView="visible" variants={variants} transition={{duration: 0.4}} viewport={{once: true, amount: 0.5}}>
            {props.softwareAnimation && <Lottie className='skill-animation' animationData={SoftwareAnimation}></Lottie>}
            {props.frontendAnimation && <Lottie className='skill-animation' animationData={ReactAnimation}></Lottie>}
            {props.backendAnimation && <Lottie className='skill-animation' animationData={NodeAnimation}></Lottie>}
            <h2 className='skill-card-heading'>{props.heading}</h2>
            <div className='underline-custom'></div>
            <div className='skill-content quote'>
                <p><i>{props.quote}</i></p>
            </div>
            <div className='skill-content'>
                <p>{props.contentLine1}</p>
                <p>{props.contentLine2}</p>
            </div>
        </motion.div>
    );
}

export default SkillCard;