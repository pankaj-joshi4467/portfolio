import React from "react";

function ListItem(props){
    return(
        <div>
            <li>
                <div className="list-item">
                    <h4 className="poppinsFamily">{props.heading}</h4>
                    <p className="robotomonoFamily list-content">{props.content}</p>
                </div>
            </li>
        </div>
    );
}

export default ListItem;