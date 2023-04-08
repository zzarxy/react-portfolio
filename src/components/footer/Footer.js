import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='h-[208px] border-t border-gray bg-pageBg indent'>
            <div className='container'>
                <div className='flex justify-between mt-[32px] gap-6 flex-wrap'>
                    <div>
                        <div className='flex gap-[24px]'>
                            <NavLink to="/" className="logo">
                                <img src={require('./../../img/icons/logo.png')} width={100} height={100} />
                            </NavLink>
                            <p className='text-gray'>zarxymen@gmail.com</p>
                        </div>
                        <p className='mt-[16px]'>Front-end developer</p>
                    </div>
                    <div>
                        <h3 className='text-[24px] font-medium'>Media</h3>
                        <div className='flex mt-[12px] h-[24px] text-gray gap-[16px]'>
                            <a href="https://github.com/zzarxy">
                                <FontAwesomeIcon icon={faGithub} className='h-[100%] hover:text-white duration-200' />
                            </a>
                            <a href="https://t.me/d_ilyaa">
                                <FontAwesomeIcon icon={faTelegram} className='h-[100%] hover:text-white duration-200' />
                            </a>
                            <a href="https://discordapp.com/users/SALAT#0409">
                                <FontAwesomeIcon icon={faDiscord} className='h-[100%] hover:text-white duration-200' />
                            </a>
                        </div>
                    </div>
                </div>
                <p className='mt-[48px] text-center text-gray'>© Copyright 2022. Made by zarxy</p>
            </div>
        </div>
    );
};

export default Footer;