import ProjectCard from '../components/ProjectCard'
import { projects } from '../utils/constants'
import { motion } from 'framer-motion'
import { FadeIn } from '../utils/motion'

const Projects = () => {
  return (
    <div
      className='h-full mx-[10%] flex flex-col justify-center items-center gap-10 dark:z-10 max-sm:scale-90 max-sm:relative max-sm:h-max max-md:h-full'
      id='projects'
    >
      <motion.div
        variants={FadeIn('left', 'spring', 0.4, 0.6)}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col gap-6 content-start'
      >
        <h2 className='font-poppins text-center font-bold text-6xl text-black-90 dark:text-white'>
          Projects
        </h2>
        <div className='flex flex-wrap gap-5 justify-center'>
          {[
            {
              id: 1,
              label: 'UI/UX',
              onClick: ''
            },
            {
              id: 2,
              label: 'Front End',
              onClick: ''
            },
            {
              id: 1,
              label: 'Full Stack',
              onClick: ''
            }
          ].map((item) => {
            return (
              <div
                key={item.id}
                className='h-[45px] w-max px-6 flex items-center justify-center rounded-full  shadow-primary hover:gradient-text cursor-pointer dark:bg-[#03001c] dark:hover:shadow-[2px_2px_15px_0_rgba(255,255,255,0.15)]'
              >
                <button className='font-gruppo font-bold text-xl dark:text-white '>
                  {item.label}
                </button>
              </div>
            )
          })}
        </div>
      </motion.div>
      <motion.div className='mx-20 flex gap-4 flex-wrap max-sm:flex-col justify-center'>
        {projects.map((project, i) => (
          <motion.div
            variants={FadeIn('right', 'spring', i * 0.4, 0.8)}
            initial='hidden'
            whileInView='show'
            // viewport={{ once: false, amount: 0.25 }}
            key={i}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              desription={project.description}
              icon1={project.icon1}
              icon2={project.icon2}
              href1={project.href1}
              href2={project.href2}
              tagText={project.tagText}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
