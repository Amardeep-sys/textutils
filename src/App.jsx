import { useEffect, useState, useTransition } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import TextArea from './components/Textarea.jsx';
import Button from './components/Button.jsx';
import CustomDarkmod from './components/customDarkmod.jsx';


function App() {
  const[userText, setUserText] = useState("Enter your text here.");
  const [spellcheck, setSpellcheck] = useState(false);
  const capitalizeFirstLetterAfterFullStop = (str) => {
   
    const modifiedText = str.replace(/(?:[.]\s*)([a-zA-Z])/g, (match, letter) => {
      return ( match.charAt(0) + letter.toUpperCase());
      
    });
    setUserText(modifiedText);
  };

  const [darkMode , setDarkmode] = useState("Light Mode");
  const [darkmodecss, setCss] = useState({
    backgroundColor: "black",
    color: "White"
  });

  function toggleDarkMode(){
    if(darkMode === 'Light Mode'){
    setDarkmode('Dark Mode');
    setCss({
      backgroundColor: 'white',
      color: 'black'
    })
  }else{
  
    setDarkmode('Light Mode');
    setCss({
      backgroundColor: 'black',
      color: 'white'
    })
  }
  }
  return (
    <>
   <Navbar text={darkMode} fnctn={toggleDarkMode} style={darkmodecss}/>
    
   <div className='hero-page' style={darkmodecss}>
    <div id='EditingPage'>

   <TextArea onChange= {setUserText} text={userText} disabled={false} style= {darkmodecss}/>
  <div className="textInfo" style={darkmodecss}>
    {/*  TEXT INFORMATION LIKE WORDS, CHARACTERS AND TIME TAKE TO READ */}
    <p>Words : {userText === "" ? 0 : userText.trim().split(' ').length}</p>
    <p>Characters : {userText.trim().length}</p>
    <p>Time to read 
      : {Math.floor(userText.trim().split(" ").length / 200)} minutes
      </p>
  </div>
  {/*  BUTTON GROUP */}
   <div className='controls-btn'>
   <Button text='uppercase' clickEve={() => setUserText(userText.toLocaleUpperCase())}/>
   <Button text='lowercase' clickEve={()=> setUserText(userText.toLocaleLowerCase())}/>
   <Button text='clear' clickEve={()=> setUserText("")}/>
   <Button text='Capitalize' clickEve={()=> capitalizeFirstLetterAfterFullStop(userText)} />
   </div>
    </div>

    <div className="previewSection" style={darkmodecss}>
      <TextArea text={userText} onChange={setUserText} heading='Preview' disabled={true} style={darkmodecss}/>
    </div>
    <div className="tools" style={darkmodecss}>
  <h1 style={darkmodecss}>Custom Theme</h1>
  <div className='colorsSelect'>

    <CustomDarkmod style={darkmodecss} label='Select Background Color'/>
    <CustomDarkmod style={darkmodecss} label='Select Text Color'/>
  </div>
    </div>
    </div>
    </>
  )
}

export default App