import React from "react";
import Subheading from "./Subheading";
import WorkCard from "./WorkCard";
import { Grid } from "@mui/material";
import WorkData from "../workData";

function WorkSection(){
    return(
        <div id="Work" className="work-container">
            <Subheading content="My Work"/>
            <div>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"University Website"} 
                            projectCategory={"Web Development"} 
                            imgURL={require("../res/work/uni.png")}
                            projectURL={"https://relaxed-dolphin-7a34fa.netlify.app/"}
                        />
                    </Grid>
                    <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"Tour and Travel Website"} 
                            projectCategory={"ReactJs"} 
                            imgURL={require("../res/work/tour.png")}
                            projectURL={"https://idyllic-lamington-e962b3.netlify.app/"}
                        />
                    </Grid>
                    {/* Add more Grid items here for more projects */}
                </Grid>
            </div>
        </div>
    );
}

export default WorkSection;
