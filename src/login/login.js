import React, { Component } from 'react'
import '../login/login.css'
import bitmoji from '../images/mathu_bitmoji.gif'
import $ from 'jquery'
import { useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import UncontrolledExample from '../carousels/carosel';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { isVisible } from '@testing-library/user-event/dist/utils';
//import crctimg from '../images/eeeee.gif';

export default function Login() {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(true);
  const [isActive1, setActive1] = useState("false");
  const [visible, setVisible] = React.useState(false);
  const [carovisible, setcaroVisible] = React.useState(false);
  const [crct, setcrct] = React.useState(false);

  function func(e){
    e.preventDefault();
  }
  var k=0;
  var m=0;
  function dance(){
    if((data1=="LUSEYY" || data1=="LOGAPRAKASH" || data1=="LUSEY") && data2=='PASSWORD')
    {
      m=1;
      setActive(true);
      setVisible(false);
      setcaroVisible(false);
      // setcrct(true);
    }
    else
    {
      setActive(!isActive);
      setVisible(!visible);
      setcaroVisible(true);
    }
  }
  var c=0;
  function change(){
    if(c==0){
      setActive1(!isActive1);
      c=1;
    }
    else if(c==1){
      setActive1(!isActive1);
      c=0;
    }
  }
  function nav(){
    if((data1=="LUSEYY" || data1=="LOGAPRAKASH" || data1=="LUSEY") && data2=='PASSWORD'){
      navigate("/home");
    }
  }
  const [data1,sdata1]=useState('')
  const [data2,sdata2]=useState('')

  return (

    <div>
       <div className='div1'>
        {/* <img src={bitmoji} alt="yomuuuu" className='bitmoji'></img> */}

          <form onSubmit={func}>
          <div className='loginbox'>
            <p className='login'>Login</p>
            <label className='loglabel'>My user name</label>
            <br></br>
            <input type="text" className="inp" name="username" autoComplete='off' onChange={(e)=>{sdata1(e.target.value)}}></input>
            <br></br><br></br>
            <label className='loglabel'>password</label>
            <br></br>
            <input type="text" className="inp" name="password" autoComplete='off' onChange={(e)=>{sdata2(e.target.value)}}></input>
            <br></br>
            <br></br>
            <div className='cb'>
              <input type='checkbox' className="tandc" onClick={dance}></input>
              <h6 className='declare'>I hereby declare that the given information is correct </h6>
            </div>
            </div>
            {isActive && <button className="show" id='sub' type='submit' onClick={nav} >Submit</button>}
            {visible && <button className={isActive1 ? "left" : "right"} id='sub' type='submit' onMouseOver={change} >Submit</button> }


          </form>
      
        <br></br>
        <br></br>
      </div>
      <div className='div2'>
            { carovisible && <UncontrolledExample/>}
            {crct && <img className='crcti'></img>}
      </div>
      
    </div>
  )
}

