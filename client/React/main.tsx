import * as React from 'react';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @ts-ignore
import erDiagram from '../../public/images/Diagram.png';

const Main = props => {

  const text = {
    object: {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
      obj1: {
        anotherkey: 'value6',
        keyagain: 'value7'
      },
      key5: 'value5'
    }
  }

  return (
    <div className='body'>
      < NavBar /> 
      <div id='main-content' className='mainContent'>
        <div id='dynamic-about' className='dynamicAbout left-1' >
          <p>radiQL is a GraphQL Schema Generator that meets all your needs</p>
        </div>
        <div className='stats left-2'>Stats here?</div>
        <textarea id='code-output' className='codeOutput'>
          {JSON.stringify(text)}
        </textarea>
      </div>
    </div>
  )
}

export default Main;