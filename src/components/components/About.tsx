import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { services } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc/SectionWrapper'

interface IServiceCard {
  index: number,
  service: { title: string, icon: string }
}

function ServiceCard(params: IServiceCard) {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * params.index, 0.75)}
        className='w-full dark-violet-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // options={{ max: 45, speed: 450, scale: 1 }}
          className='bg-tertiary, rounded-[20px] py-5 px-12 min-h-[280px] 
            flex justify-evenly items-center flex-col'>

          <img src={params.service.icon} alt={params.service.title}
            className='w-16 h-16 object-contain' />
          <h3 className="text-white text-[20px] text-center font-bold">

            {params.service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function About() {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={`${styles.sectionSubText}`}>Введение</p>
        <p className={`${styles.sectionHeadText}`}>Обзор.</p>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Я начинающий разработчик с огромным желанием создавать полезные приложения,
        которые смогут решать повседневные проблемы вне зависимости от сферы деятельности.
        Среди своих положительных сторон могу отметить: быструю обучаемость, целеустремленность, дисциплину
        и способность быстро находить подход к людям.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 cursor-default'>
        {services.map((service, index) => (
          <ServiceCard service={service} key={service.title} index={index} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');