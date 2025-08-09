import React from "react";
import Subheading from "./Subheading";
import { Box } from "@mui/material";
import MediaControlCard from "./expCard";


function ExperienceSection(){
    return(
        <div id="Experience" className="experience-section">
            <Subheading content="My Experiences" />
            <Box display="grid" gap={2} sx={{justifyContent: "center"}}>
                <MediaControlCard 
                    location="Remote"
                    position="Full Stack Developer intern"
                    organization="Vilearnx Advance Technologies"
                    startYear="2024"
                    content="During my internship, I collaborated on multiple full-stack web development projects, contributing to both front-end and back-end functionalities using the MERN stack. I implemented secure user authentication, optimized database operations, and integrated real-time features to enhance application performance. Leading a small team, I coordinated Agile-based task distribution, conducted regular progress reviews, and ensured code quality through Git-based version control and collaborative workflows. My role also involved troubleshooting technical issues, optimizing UI/UX for responsiveness, and ensuring timely project delivery through effective communication and problem-solving."
                />
            </Box>

        </div>
    );
}

export default ExperienceSection;