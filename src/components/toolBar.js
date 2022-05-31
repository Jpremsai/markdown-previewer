import React from "react";
import {BsArrowsAngleContract} from 'react-icons/bs';
import {BsArrowsAngleExpand} from 'react-icons/bs';

const ToolBar = ({maximize, onClick, heading, style}) => {
    const icon = maximize ? (<BsArrowsAngleContract style={{color:'white',backgroundColor: 'red'}} />) : (<BsArrowsAngleExpand />);
    return (
        <div className={style}>
            <div>
            <span>{heading}</span>
        <span><button onClick={onClick}>{icon}</button></span>
        </div>
        </div>
    )
}

export default ToolBar;