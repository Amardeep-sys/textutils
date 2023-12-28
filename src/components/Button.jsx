import React from "react";


export default function Button ({clickEve = ()=> console.log("Button event listener"), text="button"}){
    return (
        <>
        <button onClick={(x)=> clickEve()}> 
          {text}
        </button>
        </>
    )
}