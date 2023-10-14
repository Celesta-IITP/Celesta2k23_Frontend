import React from "react";

function Image(props){
    return <img style={props.style} src={props.src} height={props.height} width={props.width} alt={props.alt} onClick={props.onClick} />
}
export default Image;