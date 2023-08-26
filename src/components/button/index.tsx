import React from 'react'

interface ButtonTypes {
  children: any;
  type?: 'primary' | 'secondary';
  handleClick?: any;
}


const Button = ({type, children, handleClick}:ButtonTypes) => {

  // the main function
  const handleClk = () => {
    if(!handleClick) return
    handleClick()
  };

  // primary button
  const primary = <button onClick={handleClk} className='h-[60px] w-full bg-[var(--primary-color)] text-white rounded font-[16px]' type='button'> {children} </button>

  // secondary button
  const secondary = <button onClick={handleClk} className='h-[60px] w-full border-2  text-black rounded font-[16px]' type='button'> {children} </button>


  return (
    type === 'secondary' ? secondary : primary
  );
}

export default Button