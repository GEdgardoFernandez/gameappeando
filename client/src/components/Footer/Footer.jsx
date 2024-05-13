import React from "react";
import footerStyles from "./Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div id={footerStyles.copyright}>
            <p>
                © All rights reserved. | Design by Guillermo Fernandez.
            </p>
            <ul className={footerStyles.contact}>
                <li>
                    <a href="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-703b50267/" target="_blank">
                        <FaLinkedin size="1.5em" color="cyan" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GEdgardoFernandez?tab=repositories" target="_blank">
                        <FaGithub size="1.5em" color="lime" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

 