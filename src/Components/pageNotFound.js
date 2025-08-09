import React from "react";

function PageNotFound(){
    return(
        <div>
            <div className="robotomonoFamily error404" style={{alignItems: "center"}}>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <p>It looks like you are requesting a page that does'nt exist.</p>
                <a className='resume-button' href="/"><span class="text">Go Home</span><span>Home</span></a>
            </div>
        </div>
    );
}

export default PageNotFound;