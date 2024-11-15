import { useState } from "react";
import avatar from '../assets/IMG_20240907_231942_091.jpg'
export default function Aside(){
    const [active, setActive] = useState(false); 

    const asideClick = () => {
        setActive(prevActive => !prevActive); 
    };

    return(
        <aside className={`sidebar ${active ? 'active' : ''}`} data-sidebar>
        <div className="sidebar-info">
        <figure className="avatar-box">
            <img
            src={avatar}
            alt="Khalid Saad Aldin "
            width="80"
            />
        </figure>

        <div className="info-content">
            <h1 className="name" title="Khalid Saad Aldin ">Khalid Saad Aldin</h1>

            <p className="title">Business Intelligence Analyst</p>
        </div>

        <button className="info_more-btn" onClick={asideClick} data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
        </button>
        </div>

        <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
            <li className="contact-item">
            <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:khalidsaadaldinyahia@gmail.com" className="contact-link"
                >khalidsaadaldinyahia@gmail.com</a
                >
            </div>
            </li>

            <li className="contact-item">
            <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+966560479771" className="contact-link"
                >+966560479771</a
                >
            </div>
            </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
            <li className="social-item">
            <a
                href="https://www.linkedin.com/in/khalid-ali-864251294"
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            </li>

            <li className="social-item">
            <a
                href=""
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            </li>

            <li className="social-item">
            <a
                href=""
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
            </li>
            <li className="social-item">
            <a
                href=""
                className="social-link"
                target="_blank"
            >
                <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            </li>
        </ul>
        </div>
    </aside>
    );
} ;