import React from 'react';

//countup
import CountUp from 'react-countup';
//interseccion hook
import {useInView} from 'react-intersection-observer';
import{motion} from 'framer-motion';
//variantes
import{fadeIn} from '../variants';

const About = () => {

  const [ref, inView] = useInView({

  });
  return (<section  className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen'>
         {/*img */}
         <motion.div 
         variants={fadeIn('right',0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
         {/*texto */}
         <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
         className='flex-1'>
<h2 className='h2 text-accent mb-6' >Lorem</h2>           <h3 className='h3 mb-4'>
             Soy fotógrafa y educadora con más de 10 años de experiencia
          </h3>
          <p className='mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[35px] font-tertiary text-gradient mb-2'>
              {
                inView?
              <CountUp start={0} end={13} duration={3} />:null}
             
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Años de <br />
            Experiencia
            </div>
          </div>
          <div>
            <div className='text-[35px] font-tertiary text-gradient mb-2'>
              {
                inView?
              <CountUp start={0} end={7} duration={3} />:null}
               k+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Proyectos <br />
            Completados
            </div>
          </div>
          <div>
            <div className='text-[35px] font-tertiary text-gradient mb-2'>
              {
                inView?
              <CountUp start={0} end={12} duration={3} />:null}
              k+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Clientes <br />
            Satisfechos
            </div>
          </div>
         </div>

         <div className='flex gap-x-8 item-center'>
           <button className='btn btn-lg'>Contáctame  </button>
<a href="#" className='text-gradient btn-link'>
  Mi portafolio
</a>
         
         </div>
         </motion.div>      </div>
    </div>


  </section>);
};

export default About;
