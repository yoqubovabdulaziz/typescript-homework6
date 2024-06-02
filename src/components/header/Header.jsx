import React, { useState } from 'react';
import './Header.scss';

import { CiLocationOn, CiUser, CiHeart } from 'react-icons/ci';
import { IoSearch, IoCartOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';

import uzbFlag from '../../assets/uzb.svg';
import rusFlag from '../../assets/russia-flag.png';
import logo from '../../assets/uzum-logo.svg';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const Header = () => {
    const [langDropdown, setLangDropdown] = useState(false);
    const { t, i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState({
        flag: uzbFlag,
        label: t('sub__header.lang'),
        code: 'uz'
    });

    const languages = [
        {
            code: 'uz',
            label: "O'zbekcha",
            flag: uzbFlag,
        },
        {
            code: 'rus',
            label: 'Русский',
            flag: rusFlag,
        },
    ];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang.code);
        setCurrentLang(lang);
        setLangDropdown(false);
    };

    return (
        <>
            <header id="header" className="header">
                <div className="sub__header">
                    <div className="container sub__header__content">
                        <div className="sub__header__location">
                            <p className="sub__header__location__city">
                                <CiLocationOn />
                                {t('sub__header.location')} <span>{t('sub__header.city')}</span>
                            </p>
                            <p className="sub__header__location__punkt">
                                {t('sub__header.punkt')}
                            </p>
                        </div>
                        <p className="sub__header__description">
                            {t('sub__header.description')}
                        </p>
                        <div className="sub__header__actions">
                            <p>{t('sub__header.sell-on-uzum')}</p>
                            <p>{t('sub__header.question')}</p>
                            <p>{t('sub__header.orders')}</p>
                            <div className="sub__header__actions__lang">
                                <button
                                    onClick={() => setLangDropdown((p) => !p)}
                                    className="lang__button"
                                >
                                    <img src={currentLang.flag} alt="" />
                                    <p>{currentLang.label}</p>
                                </button>
                                <div className={`sub__header__lang__dropdown ${langDropdown ? "show__lang__dropdown" : ""}`}>
                                    {languages
                                        .filter((lang) => lang.code !== currentLang.code)
                                        .map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang)}
                                                className="lang__button"
                                            >
                                                <img src={lang.flag} alt="" />
                                                <p>{lang.label}</p>
                                            </button>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <div className="container nav__content">
                        <NavLink className="nav__logo">
                            <img src={logo} alt="" />
                        </NavLink>
                        <div className="nav__center">
                            <button className="nav__katalog__btn">
                                <FiMenu />
                                Katalog
                            </button>
                            <div className="nav__search__box">
                                <input
                                    type="text"
                                    className="nav__search"
                                    placeholder="Mahsulotlar va turkumlar izlash"
                                />
                                <button className="search__btn">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                        <div className="nav__actions">
                            <div className="nav__actions__item">
                                <CiUser />
                                <p>Kirish</p>
                            </div>
                            <div className="nav__actions__item">
                                <CiHeart />
                                <p>Saralangan</p>
                            </div>
                            <div className="nav__actions__item">
                                <IoCartOutline />
                                <p>Savat</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="sup__header container">
                    <p>Muddalti to'lov</p>
                    <p>Yozgi savdo</p>
                    <p>Uyda salqinlik</p>
                    <p>Hovuzlar</p>
                    <p>Elektronika</p>
                    <p>Maishiy texnika</p>
                    <p>Kiyim</p>
                    <p>Poyabzallar</p>
                    <p>Aksessuasral</p>
                    <p>Go'zallik va parvarish</p>
                    <p>Yana</p>
                </div>
            </header>
        </>
    );
};

export default Header;
