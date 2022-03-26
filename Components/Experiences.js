import React from 'react'
import { Box, Avatar } from "@chakra-ui/react"
import styles from '../styles/Work.module.css'
import { userinfo, headings } from '../Constants/userinfo'

const Experiences = ({ currentTheme }) => {
    return (
        <div className={styles.experienceWrapper}>
            <h1 className={styles.workHeading} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{headings.experience}</h1>
            <div className={styles.experienceCardWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                {
                    userinfo.experience.experienceList ?
                    userinfo.experience.experienceList.map((exp, key) => {
                            return (
                                <div className={styles.experienceCard} key={key} data-aos="fade-up">
                                    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                                        <div style={{ background: currentTheme.secondary, height: '150px' }}></div>
                                        <div className={styles.experienceCardContent}>
                                            <h1>{exp.company}</h1>
                                            <div className={styles.avatar}>
                                                <Avatar size="xl" name={exp.company} src={"https://github.com/luckyman3559/my-portfolio/blob/main/styles/logos/logo1.png"}/>
                                            </div>
                                            <div style={{ position: 'relative', top: '20px' }}>
                                                <h2>{exp.position}</h2>
                                                <h3>{exp.description1}</h3>
                                                <h3>{exp.description2}</h3>
                                                <h3>{exp.description3}</h3>
                                            </div>
                                            <h4 style={{ color: currentTheme.subtext }}>{exp.time}</h4>
                                        </div>
                                    </Box>
                                </div>
                            )
                        }) : null
                }
            </div>
        </div>
    )
}

export default Experiences
