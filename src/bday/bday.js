import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './bday.css'
import Caroselwish from '../carousels/caroselwish.js'
import Snowfall from 'react-snowfall'


export default function bday() {
  const [btninvisi,setbtninvisi] = useState(true);
  const [caroselinvisi,setcaroselinvisi] = useState(false);
  const [snow,setsnow] = useState(false);
  function action()
  {
    setbtninvisi(false);
    setcaroselinvisi(true);
    setsnow(true);
  }
  return (
    <div>
      <div className='nav'>
            <Link to="/home" style={{ color: 'black',textDecoration: 'none' }}><h1 className='bu'>Bday. you</h1></Link>
            <ul>
              <li><Link to="/wishes" style={{ color: '#F43839' }}><a>YOUMUUU</a></Link></li>
              <li><Link to="/us" style={{ color: 'black' }}><a>USSSSS</a></Link></li>              
              <li><Link to="/seeme" style={{ color: 'black' }}><a>SEE MEEE</a></Link></li>
              <li><Link to="/login" style={{color:'black'}}><a>LOGOUT</a></Link></li>
            </ul>
            {snow && <Snowfall color="yellow" snowflakeCount={500}/>}
            {caroselinvisi && <div className='caroselbox' ><Caroselwish/></div>}
            {btninvisi && <div class="box1" onClick={action}>This is youuuuu ....</div>}
        </div>


    </div>
  )
}

