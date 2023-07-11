import React from "react";

function Button(props){
    console.log(props);
    const {href, children, handleClick} = props
    return (
        href ? 
            <a className="btn btn-link" href={href}>{children}</a> : 
            <button className="btn btn-warning" onClick={handleClick}>{children}</button>
    )
}

export default Button