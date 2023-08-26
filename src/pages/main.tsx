import React from 'react';
import SCANNER from '../assets/Scanner.svg';
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className='w-[90%] mx-auto h-[100vh] flex items-center flex-col justify-center '>
        <div className='flex flex-col justify-center items-center gap-5 my-10'>
          <img width={'100px'} src={SCANNER} alt="scanner" />
          <p className='text-center'>Place the QR code on the ticket in from of the camera and validate ticket</p>
        </div>

        <Button><Link to='/qr-scanner'>Start Scanner</Link></Button>
      </div>


    </>
  )
}

export default Main