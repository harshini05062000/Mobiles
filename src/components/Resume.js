import React from 'react';
import data from '../data/data.json';
import profileIcon from '../img/samsung1.jpg';
import {Link} from 'react-router-dom';


export default function Resume(props) {
        

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
                        <h2>SAMSUNG M21</h2>
                        <h4 className="text-secondary">Rs.12,999</h4>
                        
                            <h5 className="text-secondary">4 GB-RAM </h5>
                            <h5 className="text-secondary">64 GB-Memory </h5>
                            <h5 className="text-secondary">Battery : 6000mAh </h5>
                        
              
                <h6 className="text-secondary">OS : ANDROID 10</h6>
             
                    </div>
                </div>
            </div>
            



            <div className="col-lg-8 m-2 data-card">
                <div className="card shadow new-right-side ">
                    <div className="card-body index-top">
                        <h2>About:</h2>
                        <hr />
                        <h5 className
                        ="about-matter">{info.samsungm21}</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}