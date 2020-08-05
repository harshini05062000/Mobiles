import React from 'react';
import data from '../data/data.json';
import profileIcon from '../img/samsung1.jpg';
import {Link} from 'react-router-dom';


export default function Resume1(props) {
        

        let info=data.profile[props.location.data.id] 
        
    return (
        <div className="navigation">
            
             
         <div className="row justify-content-center">
         <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={profileIcon} alt="profile Icon" style={{width:"100px"},{height:"15%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>SAMSUNG M30</h2>
                        <h4 className="text-secondary">Rs.16,490</h4>
                        
                            <h5 className="text-secondary">3 GB-RAM </h5>
                            <h5 className="text-secondary">32 GB-Memory </h5>
                            <h5 className="text-secondary">Battery : 5000mAh </h5>
                        
              
                <h6 className="text-secondary">OS : ANDROID 8.1 Oreo</h6>
             
                    </div>
                </div>
            </div>
            



            <div className="col-lg-8 m-2 data-card">
                <div className="card shadow new-right-side ">
                    <div className="card-body index-top">
                        <h2>About:</h2>
                        <hr />
                        <h5 className
                        ="about-matter">{info.samsungm30}</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}