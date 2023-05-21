import React from 'react';

//icon
import{BsArrowUpRight} from 'react-icons/bs';
import{motion} from 'framer-motion';
import {fadeIn} from '../variants'

//datos de servicio
const services =[
  {
  name: 'Fotógrafa',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'Leer más'
},
{
  name: 'Fototografía análoga',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'Leer más'
},
{
  name: 'Fototografía digital',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'Leer más'
},
{
  name: 'Educación diferencial',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'Leer más'
},

];

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div clasName='flex flex-col lg:flex-row'>
        {/* texto */}
        <div clasName='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6' >Lorem</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            Lorem ipsum dolor sit amet</h3>
            <button className='btn btn-sm'>Ve mi trabajo</button>
        </div>
         {/* texto */}
         <div></div>
      </div>
    </div>
    </section>;
};

export default Services;
