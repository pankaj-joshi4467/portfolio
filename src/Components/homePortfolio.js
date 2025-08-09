import React from 'react';
import '../index.css';
import {motion} from "framer-motion";
import Lottie from "lottie-react";
import ScrollDown from "../res/animation_lmc3rqt9.json";
import AnimatedCursor from './animatedCursor';

const text = "FULL STACK DEVELOPER";

function HomePortfolio() {
    return(
        <div className='main-heading'>
            <motion.h1
                onMouseEnter={AnimatedCursor.textAnimate}
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.6, ease: "easeInOut"}}
            >PANKAJ JOSHI</motion.h1>
            <motion.div className='underheading-wrapper'>
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index} 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.2, delay: index * 0.08}}
                        className='underheading'
                    >{letter}</motion.span>
                ))}
            </motion.div>
            <Lottie className='scroll-animation' animationData={ScrollDown} loop={true} />
        </div>
    );
}

export default HomePortfolio;