import React from "react";
import CustomizedTimeline from "./timeline";
import Subheading from "./Subheading";

function EduSection(){
    return(
    <div id="Education" className="edu-section">
        <Subheading content="My Education and Certifications" />
        <CustomizedTimeline />
    </div>);
}

export default EduSection;