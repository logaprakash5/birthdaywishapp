import React, { useState } from 'react'
import './uss.css'
import { Link } from 'react-router-dom'
import fm from '../images/firstmeet.jpg'
import Caroselea from '../carousels/caroselea'
import fs from '../images/firstmetro.jpg'
import Caroselfb from '../carousels/caroselfb'
import crf from '../images/firstpic.jpg'
import Caroselcrf from '../carousels/caroselcrf'
import Caroselcrs from '../carousels/caroselcrs'
import Caroselcrt from '../carousels/caroselcrt'
import crs from '../images/benchbk.jpg'
import crt from '../images/benchfr.jpg'


export default function () {
    const [fmv,setfmv]=useState(false);
    const [fsv,setfsv]=useState(false);
    const [crfv,setcrfv]=useState(false);
    const [crsv,setcrsv]=useState(false);
    const [crtv,setcrtv]=useState(false);
    
    function openfm()
    {
        setfmv(true);
    }
    function openfs()
    {
        setfsv(true);
    }
    function opencrf()
    {
        setcrfv(true);
    }
    function opencrs()
    {
        setcrsv(true);
    }
    function opencrt()
    {
        setcrtv(true);
    }
  return (
    <div>
        <div className='nav'>
            <Link to="/home" style={{ color: 'black',textDecoration: 'none' }}><h1 className='bu'>Bday. you</h1></Link>
            <ul>
              <li><Link to="/wishes" style={{ color: 'black' }}><a>YOUMUUU</a></Link></li>
              <li><Link to="/us" style={{ color: '#F43839' }}><a>USSSSS</a></Link></li>              
              <li><Link to="/seeme" style={{ color: 'black' }}><a>SEE MEEE</a></Link></li>
              <li><Link to="/login" style={{color:'black'}}><a>LOGOUT</a></Link></li>
            </ul>
        </div>
        <div class="container" >
            <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="box">
                    <div class="box-body" >
                        <img class="img" src={fm} onClick={openfm}/>
                        {/*  */}
                        <div class="box-lid">
            
                            <div class="box-bowtie"></div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {fmv && <div className='car'><Caroselea/></div>}

        <div class="container1" >
            <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="box">
                    <div class="box-body">
                        <img class="img" src={fs} onClick={openfs}/>
                        <div class="box-lid">
            
                            <div class="box-bowtie"></div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {fsv && <div className='car1'><Caroselfb/></div>}

        <div class="container" >
            <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="box">
                    <div class="box-body" >
                        <img class="img" src={crf} onClick={opencrf}/>
                        {/*  */}
                        <div class="box-lid">
            
                            <div class="box-bowtie"></div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {crfv && <div className='car'><Caroselcrf/></div>}

        <div class="container1" >
            <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="box">
                    <div class="box-body">
                        <img class="img" src={crs} onClick={opencrs}/>
                        <div class="box-lid">
            
                            <div class="box-bowtie"></div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {crsv && <div className='car1'><Caroselcrs/></div>}

        <div class="container" >
            <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="box">
                    <div class="box-body">
                        <img class="img" src={crt} onClick={opencrt}/>
                        <div class="box-lid">
            
                            <div class="box-bowtie"></div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {crtv && <div className='car'><Caroselcrt/></div>}
        
    </div>
  )
}
