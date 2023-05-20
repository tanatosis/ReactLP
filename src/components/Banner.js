import React from 'react';
//imagen

import Image from '../assets/avatar.svg';

//iconos
import{ FaGitHub, FaYoutube, FaDribbble} from 'react-icons';

//type animación
import {TypeAnimation} from 'react-type-animation';
//motion
import{motion} from 'framer-motion';
//variantes
import{fadeIn} from '../variants';

const Banner = () => {
  return <section className='section' id='home'>
  
  <div className='container mx-auto'>
    <div>
<div>
  <h1>
    Natalia <span>Meily</span>
    </h1>
    <div className='mb-6 text-[36px]'>
      <span className='mr-4'>Yo soy</span>
      <TypeAnimation sequence={[
          'Fotógrafa',
          2000,
          'Educadora',
          2000,
          'Especialista',
          2000,
        ]}
      speed={50}
      className="text-accent"
      wrapper="span"
      repeat={Infinity}
      />
    </div>
</div>

<div>
  <img src={Image} />
</div>

    </div>
  </div>
  
  
  </section>;
};

export default Banner;
