import React from 'react';

import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
  <div className="container mx-auto " >
<div className="flex justify-between items-center">
  <a href='#'>
    <img className='lg:ml-[120px]' src={Logo} alt='' />
  </a>
  <button className='btn btn-sm transform lg:translate-x-[-100px]'>
            Contáctame
          </button></div>

  </div>
  
  
  </header>;
};

export default Header;
