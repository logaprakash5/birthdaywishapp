import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { ReactFloatingBalloons } from "react-floating-balloons";
import {FloatingTree} from '@floating-ui/react';
import './balloon.css';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
export default function () {
    
  return (
    <div>
      <div className='nav'>
            <Link to="/home" style={{ color: 'black',textDecoration: 'none' }}><h1 className='bu'>Bday. you</h1></Link>
            <ul>
              <li><Link to="/wishes" style={{ color: 'black' }}><a>YOUMUUU</a></Link></li>
              <li><Link to="/us" style={{ color: 'black' }}><a>USSSSS</a></Link></li>              
              <li><Link to="/seeme" style={{ color: '#F43839' }}><a>SEE MEEE</a></Link></li>
              <li><Link to="/login" style={{color:'black'}}><a>LOGOUT</a></Link></li>
            </ul>
      </div>
        <ReactFloatingBalloons
        count={8}
        colors={["yellow","green"]}
        popVolumeLevel={0.1}
      />
      <FloatingTree/>
      {/* <div className='tri'></div> */}
    </div>
  )
}
