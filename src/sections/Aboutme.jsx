/* eslint-disable react/no-unescaped-entities */
import AboutImg from '../assets/images/about-me-image.svg'
import { skills } from '../utils/constants'
import { FadeIn, RotateIn } from '../utils/motion'
import { motion } from 'framer-motion'
const Aboutme = () => {
  return (
    <div
      className=' mx-[15%] h-screen flex-align-center gap-3 z-[5] max-sm:scale-90 max-sm:h-full max-sm:mt-10 max-md:h-full'
      id='about'
    >
      <motion.div
        variants={RotateIn('left')}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: false, amount: 0.25 }}
        className='flex-1 w-full h-full flex justify-center items-center max-sm:hidden'
      >
        <img src={AboutImg} className='h-[65vh] w-max' />
      </motion.div>
      <div className='flex-1 w-full h-full flex flex-col gap-9 justify-center'>
        <motion.h2
          variants={FadeIn('left', 'spring', 0.3, 0.6)}
          initial='hidden'
          whileInView='show'
          className='text-black-90 dark:text-white font-bold text-center font-poppins text-7xl mb-10'
        >
          About
        </motion.h2>
        <motion.p
          variants={FadeIn('left', 'spring', 0.6, 0.6)}
          initial='hidden'
          whileInView='show'
          className='text-lg flex justify-start leading-normal font-poppins text-black-90 dark:text-white md:text-md'
        >
          <p>
            Hey there! I'm a Pre Final Year Undergrad pursuing BTech in
            Information Technology. I'm genuinely intrigued by the world of Full
            Stack Development. I've already got a good grip on{' '}
            <span className='font-bold'>MERN</span>,{' '}
            <span className='font-bold'>Tailwind CSS</span>, and designing user
            interfaces with <span className='font-bold'>Figma</span>. Currently,
            I'm on a journey to master the{' '}
            <span className='font-bold'>Advanced FullStack Concepts.</span>{' '}
            Apart from academics, you'll find me actively involved in
            open-source projects and tech communities. And guess what? I've also
            taken a dive into the captivating realm of Blockchain and DevOps.
          </p>
        </motion.p>

        <div className='flex gap-4 flex-wrap'>
          {skills.map((skill, i) => (
            <motion.div
              variants={FadeIn('left', 'spring', i * 0.3, 0.6)}
              initial='hidden'
              whileInView='show'
              key={skill.icon}
              className='h-[52px] w-[52px] rounded-full flex justify-center  items-center shadow-[2px_2px_15px_0_rgba(0,0,0,0.25)] lg:p-2 p-[10px] hover:shadow-[2px_2px_15px_0_rgba(0,0,0,0.35)] dark:bg-[#03001c] dark:hover:shadow-[2px_2px_15px_0_rgba(255,255,255,0.15)]'
            >
              <motion.img
                src={skill.icon}
                className='h-[40px] w-[40px]'
                alt={skill.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Aboutme
