import React from "react";


export default function Button ({clickEve, text="button", disabed= 'false'}){
    return (
        <>
        <button disabed={disabed} onClick={(x)=> clickEve()}> 
          {text}
        </button>
        </>
    )
}