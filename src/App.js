// import './App.css';

// const  App=()=> {

// }

// export default App;

import React, { useState } from 'react'
import './App.css'
import logo from './assests/logo.png';
// import registerImg from './registerPng.svg';
function App() {


  const [email, setemail] = useState('');
  const [Fusername, setFusername] = useState('');
  const [Susername, setSusername] = useState('');
  const [pwd1, setpwd1] = useState('');
  const [pwd2, setpwd2] = useState('');

  const handelsubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='main-Register'>
      <div className="left-side">
        <div className="header">
          {/* <img src={logo} id='logo-img' /> */}
          <div className='eclipse'></div>
          <div className='rectangle1'></div>
          <div className='rectangle2'></div>
          <p className='logotitle'>trademo</p>
        </div>
        <div className="middle">
          <p className='freetrial'>Free Trial</p>
        </div>
        <p className='freeTrialDetails'>In free plan you will be getting is:</p>
        <div className='option1'>
          <p className='vector1data'>✔ Access only to older data</p>
          <p className='vector1datainfo'>Imports shipment data Jan - Mar 2018 not the latest</p>
        </div>
        <div className='option2'>
          <p className='vector1data'>✔ Limited Buyer/Supplier Info</p>
          <p className='vector1datainfo'> Out of 5 Million+ database, you can only access 0.5M</p>
        </div>
        <div className='award'>
          <div className='circle'></div>
          <div className='vector1'></div>
        </div>
        <div className='awardcontentposition'>
          <p className='awardcontent'>What you will be missing in Free Plan:</p>
        </div>
        <div className='group34'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='circle'></div>
        </div>
        <div className='freeplanoption1'>
          <p className='freeplanoption1content'>Older 2018, HS Codes global import-export trends, not the latest</p>
        </div>

        <div className='group35'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='circle'></div>
        </div>
        <div className='freeplanoption2'>
          <p className='freeplanoption2content'>You cannot download Shipment information</p>
        </div>
        
        <div className='group36'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='circle'></div>
        </div>
        <div className='freeplanoption3'>
          <p className='freeplanoption3content'>No dedicated support </p>
        </div>

        <div className='comparePlans'>Compare Plans</div>


      </div>


      <div className="right-side">
          <div className='title'>Sign up with email</div>
          <form>
          <div className='fullname'>Full Name</div>
          <input type="text"  id="fname" />
          <div className='email'>Email</div>
          <input type="text"  id="email" />
          <div className='password'>Password</div>
          <input type="text"  id="password" />
          <div className='confirmpassword'>Confirm Password</div>
          <input type="text"  id="confirmpassword" />
          <button className='submit'>Sign up</button>
          </form>
          <div className='alreadySubscribed'>Already subscribed? <span style={{color:'#8B6ADC'}}>Sign in</span></div>
          <button className='googleSignup'>Sign up with Google</button>

            {/* <form onSubmit={handelsubmit}> */}
            {/* <div className="input-group">
              <h5> Full Name</h5>
              <input type="text" name="Fname" value={Fusername}
                onChange={(e) => { setFusername(e.target.value) }} id="fname" />
            </div>
            <div className="input-group">
              <h5> Last Name</h5>
              <input type="text" name="lname" value={Susername}
                onChange={(e) => { setSusername(e.target.value) }} id="lname" />
            </div>
            <div className="input-group">
              <h5> Email</h5>
              <input type="Email" name="email" value={email}
                onChange={(e) => { setemail(e.target.value) }} id="email1" />
            </div>
            <div className="input-group">
              <h5> Password</h5>
              <input type="password" value={pwd1}
                onChange={(e) => { setpwd1(e.target.value) }} name="pwd" id="pwd1" />
            </div>
            <div className="input-group">
              <h5> Confirm Password</h5>
              <input type="password" value={pwd2}
                onChange={(e) => { setpwd2(e.target.value) }} name="pwd" id="pwd2" />
            </div>
            <input type="submit" id='sbtn' value="Submit" /> */}
            {/* </form> */}

      </div>
    </div>
  )
}

export default App;
