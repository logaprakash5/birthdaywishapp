import Confetti from "react-confetti";
import React, { useState, useRef, useEffect,Component } from "react";
import './home.css'
import gift from '../images/gift.png'
import { Link } from "react-router-dom";



export default function home() {
    const confetiRef = useRef(null);
    const [pop, setpop] = React.useState(false);
    const [gifthide,setgifthide] = useState(true);
    const [colorchange,setcolorchange] = useState(false);
    const [buchihide,setbuchihide] = useState(false);
    const [wish,setwish] =useState(false);
  function popout()
  {
    setpop(true);
    setgifthide(false);
    setcolorchange(true);
    setbuchihide(true);
    setTimeout(() => {
      setwish(true);
    }, 5000);
  }

  return (
    <div>
        <div className='nav'>
            <Link to="/home" style={{ color: 'black',textDecoration: 'none' }}><h1 className='bu'>Bday. you</h1></Link>
            <ul className="list">
              <li><Link to="/wishes" style={{ color: 'black' }}><a>YOUMUUU</a></Link></li>
              <li><Link to="/us" style={{ color: 'black' }}><a>USSSSS</a></Link></li>              
              <li><Link to="/seeme" style={{ color: 'black' }}><a>SEE MEEE</a></Link></li>
              <li><Link to="/login" style={{color:'black'}}><a>LOGOUT</a></Link></li>
            </ul>
        </div>
        <div className={colorchange ? "content":"" } >
          <br></br>
          { gifthide && <img className='giftpng' src={gift} onClick={popout}></img>}
          {/* {buchihide && <img className="buchi" src={buchhi}></img>} */}
          {pop && <Confetti numberOfPieces={350} width="1520%" height="720%"/>}
          { wish &&
          <div class="main">
              <h1 className="hbd">Wish you manyy more happieeeee <br/>returns of the dayyyy <div class="roller">
                  <span id="rolltext">
                  <span className="glowing-btn">M <span class='faulty-letter'>A</span> T H U</span><br />
                  <span className="glowing-btn">F <span class='faulty-letter'>R</span> I E N D</span>
                  <br/>
                  <span className="glowing-btn">F <span class='faulty-letter'>R</span> I E N D</span>
                  <br/>
                  {/* <span className="glowing-btn">M <span class='faulty-letter'>A</span> A D U</span><br/>
                  <span className="glowing-btn">A <span class='faulty-letter'>N</span> G E L</span><br />
                  <span className="glowing-btn">B U <span class='faulty-letter'>J</span> U K S S E Y</span><br /> */}
                  </span>
                  </div>
              </h1>
          </div>
          }
          </div>
      </div>
  )
}
