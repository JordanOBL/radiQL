import * as React from 'react';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './About'
// import CodemirrorExample from './codemirror';
import CodeBlock from './codeBlock';
import { motion, AnimatePresence } from "framer-motion";
import {FaClipboardList, FaArrowRight, FaCheck} from 'react-icons/fa';

const Main = props => {

  const [codeBody, setCodeBody] = useState()
  

  //send uri request
  const handleConvertURI = async() => {
    const dbURI = (document.getElementById('userURI') as HTMLInputElement).value;
    try{
      const response = await axios.post('/submitURI', {dbURI: dbURI})
      
      console.log(response.data)
      //@ts-ignore
      setCodeBody(response.data)
    } catch(err){
      console.log('dbURI', err)
    }
  }

  // instructions
  
  useEffect(() => {
    const clipboardIcon = (document.querySelector('.icon') as HTMLInputElement)
    clipboardIcon.addEventListener('click', () => {
      const stepThree = (document.getElementById('3') as HTMLInputElement)
      const stepTwo= (document.getElementById('2') as HTMLInputElement)
      const stepOne= (document.getElementById('1') as HTMLInputElement)
      stepThree.classList.add('current-step');
      stepTwo.classList.remove('current-step');
      stepOne.classList.remove('current-step');
      
      setInstruction(3)
    })
  }, [])


  const [instruction, setInstruction] = useState(1)

  useEffect(() => {
    if(codeBody) {
      const stepOne= (document.getElementById('1') as HTMLInputElement)
      const stepTwo = (document.getElementById('2') as HTMLInputElement)
      stepOne.classList.remove('current-step');
      stepTwo.classList.add('current-step')
      setInstruction(2)
    }
  }, [codeBody])


  return (
    <div className='body'>
      < NavBar /> 
      <Routes>
        {/* // About us Page */}
        <Route path="/About" element={< About />}/>
        {/* // Main App Page */}
        <Route path="/" element={
          <div id='main-content' className='mainContent'>
            <div id='dynamic-about' className='dynamicAbout left-1' >
              <h1>Steps to use radiQL</h1>
              <div id="circles-container">
                <span id='1' className='circle current-step'>{instruction > 1 ? <FaCheck style={{'color': 'lime'}} /> : 1}</span>
                <FaArrowRight />
                <span id='2' className='circle'>{instruction > 2 ? <FaCheck style={{'color': 'lime'}} /> : 2}</span>
                <FaArrowRight />
                <span id='3' className='circle'>3</span>
              </div>
              { instruction === 1 ? <h2>1. Paste your URI below and click "Convert!"</h2> : instruction === 2 ? <h2>2. Click "<FaClipboardList style={{'display': 'inline-block'}}/>" in the output code block.</h2> : instruction === 3 ? <h2>3. Paste code into your server to begin using GraphQL.</h2> : <h2>error with instructions</h2> }
              <div id="uri-input-container">
                <input id='userURI' type="text" placeholder='        Your Database URI' />
                <button id='convert-btn' onClick={() => handleConvertURI()} >Convert!</button>
              </div>
              <div className='stats left-2'>Stats here?</div>
            </div>
            <CodeBlock codeBody={codeBody} />
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default Main;