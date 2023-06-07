import React, {useContext} from 'react'
import Login from './Login'
import Register from './Register'
import ayushIcon from '../assets/ayush_icon.png';
import ayushHospital from '../assets/ayush_hospital.png';
import playStore from '../assets/playstore.png'
import AuthContext from '../context/auth/authContext'

const Home = () => {
  const context = useContext(AuthContext);
  const {login} = context;
  return (
    <>
    <div className='flex'>
      <div className="left">
        <div className="center">
          <img className="icon" src={ayushIcon} alt="Ayush_Icon" />
          <img className="heading" src={ayushHospital} alt="Ayush_Hospital" />
        </div>
      </div>

      <div className="right">
        <div className="details">
          <a className="android">
            <img className="info" src={playStore} alt="Play Store" />
          </a>
        </div>
      </div>
    </div>
    
    {login ? <Login /> : <Register />}

    </>
  )
}

export default Home
