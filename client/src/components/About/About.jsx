import style from './About.module.css';
import {NavLink} from 'react-router-dom'
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Aboutcomp = () => {
    return (
        <div>
            <div className={style.body}></div>
            <div className={style.text}>
                <h3>HELLO, I'M</h3>
                <h2>
                    Guillermo Fernandez
                    <span>Guillermo Fernandez</span>
                    <span>Guillermo Fernandez</span>
                    <span>Full Stack Developer</span>
                </h2>
                <div className={style.description}>
                    <h4>My name is Guillermo, I am a full stack developer with a main focus on the front end.</h4>
                    <h4>Currently, I am looking for my first professional experience in the field of programming.</h4>
                    <h4>In addition to my technical skills, such as JavaScript, HTML, CSS, React, Github, Java and SQL, I have soft skills that I consider essential, such as teamwork, creativity, effective communication and the ability to learn quickly.
            I am currently taking an additional Full Stack course at <a rel='noreferrer' href='https://www.soyhenry.com/' target='_blank'>Soy Henry</a> to continue strengthening my skills and knowledge.</h4>
                </div>
                <div>
                </div>
                <div className={style.social}>
                    <h3>You can contact me on the following social media platforms:</h3>
                    <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-703b50267'><FaLinkedin size="1.5em" color="cyan" /></a>
                    <a rel='noreferrer' target='_blank' href='https://github.com/GEdgardoFernandez'><FaGithub size="1.5em" color="lime" /></a>
                </div>
                <div className={style.btnAlign}>
                    <NavLink to='/home'>
                        <button className={style.backBtn}>
                            <span className={style.buttonTop}>BACK HOME</span></button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default Aboutcomp;