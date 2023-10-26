import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc/SectionWrapper";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from "../../constants";

interface IExperienceCard {
  experience: {
    title: string,
    icon: string,
    iconBg: string,
    date: string,
    point: string
  }
}

function ExperienceCard({ experience }: IExperienceCard) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon}
            alt={experience.iconBg}
            className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >

      <div>

        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>

      </div>

      <p className="mt-5 ml-5 text-white text-[14px] pl-1 tracking-wider">
        {experience.point}
      </p>

    </VerticalTimelineElement>
  )
}


function Experience() {

  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={`${styles.sectionSubText}`}>Как я начал</p>
        <p className={`${styles.sectionHeadText}`}>Мой путь.</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>

  )
}

export default SectionWrapper(Experience, 'experience')