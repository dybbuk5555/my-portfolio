import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import React from 'react'

const Skills = ({ currentTheme }) => {
    return (
        <>
            <h1 className={styles.workheading} data-aos="fade-up">{headings.skills}</h1>
            <div className={styles.skills} style={{ color: currentTheme.subtext }}>

                {userinfo.skills ?
                    userinfo.skills.map((value, key1) => {
                        return (
                            <React.Fragment key={key1}>
                                <ul className={styles.skillList} data-aos="fade-up">
                                    <h1 className={styles.skillHeading} style={{ color: currentTheme.text }}>{value.category}</h1>
                                    {
                                        value.skillset ?
                                            value.skillset.map((skill, key2) => {
                                                return (
                                                    <h2 key={key2}>{skill}</h2>
                                                )
                                            }) : null
                                    }
                                </ul>
                                {userinfo.skills.indexOf(value) === userinfo.skills.length - 1 ? null : <div className={styles.line} style={{ backgroundColor: currentTheme.subtext }} data-aos="fade-up"></div>}
                            </React.Fragment>
                        )
                    }) : null
                }

            </div>
        </>
    )
}

export default Skills
