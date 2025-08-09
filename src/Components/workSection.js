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
                   
                    {/* Add more Grid items here for more projects */}


                    <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"Edemy - Online Learning Platform"} 
                            projectCategory={"Mern Stack"} 
                            imgURL={require("../res/work/edemy.png")}
                            projectURL={"https://github.com/pankaj-joshi4467/Edemy---A-Learning-Management-System.git"}
                        />
                    </Grid>


                    <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"Imagify - AI Image Generator"} 
                            projectCategory={"Mern Stack"} 
                            imgURL={require("../res/work/imagify.png")}
                            projectURL={"https://github.com/pankaj-joshi4467/Imagify.git"}
                        />
                    </Grid>


                    <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"Crave Cart - Food Delivery App"} 
                            projectCategory={"Mern Stack and tailwind css"} 
                            imgURL={require("../res/work/food.png")}
                            projectURL={"https://github.com/pankaj-joshi4467/Crave-Cart.git"}
                        />
                    </Grid>



                     <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"University Portal"} 
                            projectCategory={"ReactJs"} 
                            imgURL={require("../res/work/uni.png")}
                            projectURL={"https://relaxed-dolphin-7a34fa.netlify.app/"}
                        />
                    </Grid>
                    <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={"Tour and Travel Booking"} 
                            projectCategory={"ReactJs"} 
                            imgURL={require("../res/work/tour.png")}
                            projectURL={"https://idyllic-lamington-e962b3.netlify.app/"}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default WorkSection;
