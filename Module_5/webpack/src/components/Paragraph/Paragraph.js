import React from "react";
import './paragraph.css';

function Paragraph(props) {
    const { children } = props;
    return (
        <p className="paragraph">
            {children || "Est culpa exercitation eiusmod irure minim quis adipisicing minim veniam exercitation nisi. Ex enim eu sunt mollit laboris enim. Ipsum magna esse aliquip do deserunt. Amet incididunt minim consequat do incididunt pariatur tempor anim nulla quis. Commodo eu nulla magna proident elit do ipsum excepteur anim aliqua. Aliqua sit Lorem consectetur irure. Anim adipisicing ullamco Lorem nisi quis dolor aliqua sunt."}
        </p>
    )
}

export default Paragraph;