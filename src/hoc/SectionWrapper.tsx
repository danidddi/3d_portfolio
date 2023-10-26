import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'

export function SectionWrapper(Elem: React.ComponentType, idName: string) {
    return function HOC() {
        return (
            <motion.section
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span id={idName} className='hash-span'> &nbsp;</span>
                <Elem />
            </motion.section>
        )
    }
}