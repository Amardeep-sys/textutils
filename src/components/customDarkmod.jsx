import React, { useId } from "react";

export default function({label = "Set Heading", colorOf, setcss, style}){
    const rndmId = useId();
   
   function handleColor(x){

       if(colorOf ==='text'){
        setcss({
            
                backgroundColor: style.backgroundColor,
                color: x.target.value
              
        })
   }else if(colorOf === 'background'){
    setcss({
        backgroundColor: x.target.value,
        color: style.color
      })
   }
   }
    return(
        <>
        <div className="color-selection" style={style}>

        <label htmlFor={rndmId} style={style}>{label}</label>
        <input id={rndmId} type="color"  onChange={handleColor} />
        </div>
        </>
    )
}