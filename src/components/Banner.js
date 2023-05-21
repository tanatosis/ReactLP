import React from 'react';
//imagen

import Image from '../assets/avatar.svg';

//iconos faltan

import {TypeAnimation} from 'react-type-animation';
//motion
import{motion} from 'framer-motion';
//variantes
import{fadeIn} from '../variants';

const Banner = () => {
  return <section className='section flex items-center justify-center' id='home'>
  
  <div className='container mx-auto flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
    <div className='flex-1 text-center font-secondary lg:text-left lg:ml-[120px] lg:mt-[-150px] mx-auto pt-12 lg:pt-0'>

  <motion.h1 
  variants={fadeIn('up',0.3)} 
  initial="hidden" 
  whileInView={'show'} 
  viewport={{once: false, amount: 0.7}} 
  className='text-[45px] font-bold leading-[0.9] lg:text-[70px] '>
    Natalia <span>Meily</span>
    </motion.h1>
    <motion.div 
    variants={fadeIn('up',0.4)} 
    initial="hidden" 
    whileInView={'show'} 
    viewport={{once: false, amount: 0.7}} 
    className='mb-6 text-[36px] lg:text[60px]'>
      <span className='mr-2 text-base lg:text-xl'>YO SOY</span>
      <TypeAnimation sequence={[
          'FOTÓGRAFA',
          2000,
          'EDUCADORA',
          2000,
          'ESPECIALISTA',
          2000,
        ]}
      speed={50}
      className="text-accent "
      wrapper="span"
      repeat={Infinity}
      />
       </motion.div>
       <motion.p 
       variants={fadeIn('up',0.5)} 
       initial="hidden" 
       whileInView={'show'} 
       viewport={{once: false, amount: 0.7}}
       className ='mb-8 max-w-lg max-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </motion.p>
       <motion.div 
       variants={fadeIn('up',0.6)} 
       initial="hidden" 
       whileInView={'show'} 
       viewport={{once: false, amount: 0.7}}
       className="flex max-w-max gap-x-6 items-center m-12 mx-auto lg:mx-0">
  <button className='btn btn-lg mr-[6px]'>Proyectos</button>
  <a href="#" className='text-gradient btn-link'>
    Mi Portafolio
  </a>
</motion.div>
</div>
{/*<div className='flex text-[20px] gap-x-6 max-w-max mx-auto'>
  
  
  {/*<a href="#">
    <AiOutlineInstagram/>
  </a> 
  
</div>*/}
<motion.div 
variants={fadeIn('down',0.5)} 
initial="hidden" 
whileInView={'show'} 

className=" justify-center mb-[200px] hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
  <img src={Image}  className="w-2/3" />
</motion.div>


    </div>
  </div>
  
  
  </section>;
};

export default Banner;
