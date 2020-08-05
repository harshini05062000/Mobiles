import React from 'react';
import data from '../data/data.json';
import profileIcon from '../img/i2.jpg';
import {Link} from 'react-router-dom';


export default function Resume6(props) {
        

        let info=data.profile[props.location.data.id] 
        
    return (
        <div className="navigation">
            
             
         <div className="row justify-content-center">
         <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={profileIcon} alt="profile Icon" style={{width:"55%"},{height:"10%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>I PHONE 7</h2>
                        <h4 className="text-secondary">Rs.30,500</h4>
                        
                            <h5 className="text-secondary">2 GB-RAM </h5>
                            <h5 className="text-secondary">32 GB-Memory </h5>
                            <h5 className="text-secondary">Battery : 1960 mAh </h5>
                        
              
                <h6 className="text-secondary">OS : IOS 13.6</h6>
             
                    </div>
                </div>
            </div>
            



            <div className="col-lg-8 m-2 data-card">
                <div className="card shadow new-right-side ">
                    <div className="card-body index-top">
                        <h2>About:</h2>
                        <hr />
                        <h5 className
                        ="about-matter">{info.iphone7}</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}