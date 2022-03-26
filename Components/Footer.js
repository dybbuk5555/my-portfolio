import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <Link href='/'><a><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></a></Link>
                <ul className='links'>
                    <li className={styles.listHeading}>Links</li>
                    {userinfo.links ?
                        userinfo.links.map((link, key) => {
                            return (
                                <Link href={link.link} key={key}><a><li>{link.type}</li></a></Link>
                            )
                        }) : null
                    }
                    <Link href={`${userinfo.contact.email ? userinfo.contact.email : ''}`}><a><li>Mail</li></a></Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href='/'><a><li>Home</li></a></Link>
                    <Link href='/work'><a><li>Work</li></a></Link>
                    <Link href='/#skills'><a><li>Skills</li></a></Link>
                    <Link href='/#about'><a><li>About</li></a></Link>
                </ul>
            </div>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
            <h2 className={styles.footercontent}>Providing high quality at optimal cost</h2>
        </div>
    )
}

export default Footer
