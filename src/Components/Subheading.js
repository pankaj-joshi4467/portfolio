import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 30}
}

function Subheading(props){
    return(
        <div className='sub-headings'>
            <motion.h2 variants={variants} initial="hidden" whileInView="visible" transition={{duration: 0.4}} viewport={{once: true, amount: 0.5}}>{props.content}</motion.h2>
        </div>
    );
}

export default Subheading;