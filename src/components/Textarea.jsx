import React, {useState} from 'react'

export default function textArea({onChange, text, heading = "Starts with here,", disabled = false, style}) {

 
  return (
   <>
   <div className='textarea' style={style}>

   <label htmlFor="text">{heading}</label>

   <textarea cols="30" rows="10" id='text' value={text} onChange={(x)=> onChange(x.target.value)}
   disabled = {disabled} style={style}/>
  
   </div>
   </>
  )
}
