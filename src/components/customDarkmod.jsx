import React, { useId } from "react";

export default function({label = "Set Heading", value, setValue, style}){
    const rndmId = useId();

    return(
        <>
        <div className="color-selection" style={style}>

        <label htmlFor={rndmId} style={style}>{label}</label>
        <input id={rndmId} type="color"  onChange={setValue} />
        </div>
        </>
    )
}