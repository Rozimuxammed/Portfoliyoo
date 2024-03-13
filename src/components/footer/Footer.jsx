import React from "react";
import "./Footer.css";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <IoCodeSlashOutline className="icon" />
          <p>Frontend Junior Developer</p>
        </div>
        <div className="link">
          <div className="location">
            <div className="icon">
              <a target="blank" href="https://github.com/Rozimuxammed">
                <FaGithub />
              </a>
              <small>Github</small>
            </div>
            <div className="icon">
              <a
                target="blank"
                href="https://app.netlify.com/teams/rozimuxammed"
              >
                <SiNetlify />
              </a>
              <small>Netlify</small>
            </div>
            <div className="icon">
              <a target="blank" href="https://www.instagram.com/rz.muxammed/">
                <FaInstagram />
              </a>
              <small>Instagram</small>
            </div>
            <div className="icon">
              <a
                target="blank"
                href="https://www.linkedin.com/in/rozimuhammad-rozimurodov-76737027a/"
              >
                <FaLinkedin />
              </a>
              <small>Linkedin</small>
            </div>
            <div className="icon">
              <a
                target="blank"
                href="https://mail.google.com/mail/u/0/?ogbl#inbox"
              >
                <FcGoogle />
              </a>
              <small>Gmail</small>
            </div>
          </div>
          <div className="phone">
            <p>+998 91 123 86 41</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
