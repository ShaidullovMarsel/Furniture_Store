import React from "react";

import './footer.scss';
import '../../index.scss';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__wrapper-lorem">
                    <ul className="footer__lorem">
                        <li className="footer__lorem-item"><a href="#">Lorem</a></li>
                        <li className="footer__lorem-item"><a href="#">Lorem</a></li>
                        <li className="footer__lorem-item"><a href="#">Lorem</a></li>
                        <li className="footer__lorem-item"><a href="#">Lorem</a></li>
                        <li className="footer__lorem-item"><a href="#">Lorem</a></li>
                        <li className="footer__lorem-item"><a href="#">Lorem</a></li>
                    </ul>
                </div>
                <div className="footer__wrapper-about">
                    <ul className="footer__about">
                        <li className="footer__about-item"><a href="#">О компании</a></li>
                        <li className="footer__about-item"><a href="#">Отзывы</a></li>
                        <li className="footer__about-item"><a href="#">Блог</a></li>
                        <li className="footer__about-item"><a href="#">Контакты</a></li>
                        <li className="footer__about-item-span"><a href="#">Коммерческим <br/>
                            покупателям</a></li>
                    </ul>
                </div>
                <div className="footer__wrapper-company">
                    <div className="footer__company-logo">
                        LOGO
                    </div>
                    <div className="footer__company-place">
                        Москва и МО
                    </div>
                    <div className="footer__company-time">
                        Режим работы: <br/>
                        ежедневно с 9:00 до 21:00
                    </div>
                    <div className="footer__company-phone">
                        <div className="footer__phone-numberfirst">
                            <a href="tel:+74999999999" className="header__phone">8 (955) 545-23-81</a> 
                        </div>
                        <div className="footer__phone-numbersecond">
                            <a href="tel:+74999999999" className="header__phone">8 (955) 515-21-81</a>
                        </div>
                    </div>
                </div>
                <div className="footer__wrapper-links">
                    <div className="footer__links-button">
                        <button className="footercalculator">калькулятор</button>
                    </div>
                    <div className="footer__links-mail">
                        E-mail: <br/>
                        info@lorem.ru
                    </div>
                    <ul className="footer__links-social">
                        <li className="footer__lorem-item"><a href="#">FB</a></li>
                        <li className="footer__lorem-item"><a href="#">OK</a></li>
                        <li className="footer__lorem-item"><a href="#">VK</a></li>
                        <li className="footer__lorem-item"><a href="#">TW</a></li>
                        <li className="footer__lorem-item"><a href="#">IN</a></li>
                        <li className="footer__lorem-item"><a href="#">YT</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__divider">
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    © 2020 Lorem 
                </div>
                <ul className="footer__bottom-center">
                    <li className="footer__center-cookie"><a href="#">Правила использования cookie</a></li>
                    <li className="footer__center-agreement"><a href="#">Пользовательское соглашение</a></li>
                    <li className="footer__center-map"><a href="#">Карта сайта</a></li>
                </ul>
                <div className="footer__bottom-right">
                    Разработка - Lorem
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;