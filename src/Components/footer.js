import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer(){
    return(
        <div id="Contact" className="footer">
            <hr className="horizontal-line"></hr>
            <h3 className="footerTitle">Let's Build Something Amazing Together</h3>
            <h5 className="footerContent">Send me an E-mail or get in touch with me via message!</h5>
            <div className="icons">
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/pankaj-joshi4467"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/pankaj-j-116ab0239/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://wa.me/918607400287" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="mailto:pankajjoshi4467@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
            <p>Handcrafted by Pankaj Joshi</p>
            <p><CopyrightIcon sx={{fontSize: "20px"}} /> 2025</p>
        </div>
    )
}

export default Footer;