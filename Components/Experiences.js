import React from 'react'
import styles from '../styles/Home.module.css'
import { userinfo, headings, ctaTexts } from '../Constants/userinfo'
import Link from 'next/link'

const Experiences = ({ currentTheme }) => {
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.workheading} data-aos="fade-up">
                {headings.experience}
            </div>

            <div className={styles.timeline}>
                <ul>
                    {
                        userinfo.experience.experienceList ?
                            userinfo.experience.experienceList.map((exp, key) => {
                                return (
                                    <li data-aos="fade-up" key={key}>
                                        <div className={styles.content}>
                                            <h2 style={{ color: currentTheme.accent }}>{exp.company}</h2>
                                            <p style={{ color: currentTheme.text }}>{exp.position}</p>
                                            <p>
                                                <div style={{ color: currentTheme.subtext }}>{exp.description1}</div>
                                                <div style={{ color: currentTheme.subtext }}>{exp.description2}</div>
                                                <div style={{ color: currentTheme.subtext }}>{exp.description3}</div>
                                            </p>
                                            
                                        </div>
                                        <div className={styles.time} style={{ border: `2px solid ${currentTheme.accent}`, color: currentTheme.accent }}>
                                            <h4>{exp.time}</h4>
                                        </div>
                                    </li>
                                )
                            }) : null
                    }
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>

            <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link href="/#about"><a className={styles.cta3} style={{ background: currentTheme.accent, color: currentTheme.contrastText }}>{ctaTexts.educationCTA} <span>&gt;</span></a></Link></div>

        </div>
    )
}

export default Experiences
