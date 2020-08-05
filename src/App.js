import React from 'react';
import profileIcon from './img/img.jpg';
import profileIcon1 from './img/img1.jpg';
import profileIcon2 from './img/img2.jpg';
import './App.css';
// import Greet from './Greeting';
// import Count from './Counter';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './components/Resume';
import Resume1 from './components/Resume1';
import Resume2 from './components/Resume2';
import Resume3 from './components/Resume3';
import Resume4 from './components/Resume4';
import Resume5 from './components/Resume5';
import Resume6 from './components/Resume6';
import Resume7 from './components/Resume7';
import Resume8 from './components/Resume8';



function App() {
  return (
   <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/resume1' component={Resume1} />
      <Route exact path='/resume2' component={Resume2} />
      <Route exact path='/resume3' component={Resume3} />
      <Route exact path='/resume4' component={Resume4} />
      <Route exact path='/resume5' component={Resume5} />
      <Route exact path='/resume6' component={Resume6} />
      <Route exact path='/resume7' component={Resume7} />
      <Route exact path='/resume8' component={Resume8} />
      
   </BrowserRouter>
  );
}

// Home

let Home= () =>{
  let profiles=data.profile;
  return(
    <div className="row justify-content-center">
        {profiles.map((values,index)=>(
    


<div className="row">
<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
  <h2>SAMSUNG M21</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>SAMSUNG M30</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume1',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>SAMSUNG M31</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume2',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon1} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>MI NOTE 9</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume3',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon1} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>MI NOTE 8</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume4',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon1} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>MI NOTE 8 PRO</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume5',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon2} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>IPHONE 6</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume6',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon2} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>IPHONE 7</h2>
  <br></br>
  <br></br>
  
<Link to={{pathname:'/resume7',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>

<div className="col-md-4">
<div className="card text-center">
<div className="overflow">
<img src={profileIcon2} alt="image1" className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h2>IPHONE 8</h2>
  <br></br>
  <br></br>
<Link to={{pathname:'/resume8',data:{id:index}}} className="btn btn-primary">Profile</Link>
</div>

</div>
</div>




        
</div>
        ))}  
        
    </div>
  )
}

export default App;