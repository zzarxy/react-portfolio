import React, { useState } from 'react';
import Title from '../../components/title/Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cube.css'

const ContactsPage = () => {
    const copy = async () => {
        await navigator.clipboard.writeText('zarxymen@gmail.com');

        toast.success('Text copied!', {
            closeButton: false,
            position: "bottom-center",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'dark',
        });
    }
    return (
        <div className='indent'>
            <div className='container mt-14'>
                <div className='flex mb-16 justify-center gap-[100px] flex-wrap'>
                    <div className='w-[240px] text-gray font-semibold'>
                        <pre className='line line1'><span className='text-purple'>/</span>init cube</pre>
                        <pre className='line line2'><span className='text-purple'>/</span>init inner-cube</pre>
                        <pre className='line line3'><span className='text-purple'>/</span>inner-cube position center</pre>
                        <pre className='line line4'><span className='text-purple'>/</span>color --purple</pre>
                        <pre className='line line5'><span className='text-purple'>/</span>rotation true</pre>
                    </div>
                    <div className=''>
                        <div className="color-cube">
                            <div className="cube-face cube-front"></div>
                            <div className="cube-face cube-back"></div>
                            <div className="cube-face cube-bottom"></div>
                            <div className="cube-face cube-top"></div>
                            <div className="cube-face cube-left"></div>
                            <div className="cube-face cube-right"></div>
                            <div className="cube inner">
                                <div className="cube-face cube-front inner side"></div>
                                <div className="cube-face cube-back inner side"></div>
                                <div className="cube-face cube-bottom inner side"></div>
                                <div className="cube-face cube-top inner side"></div>
                                <div className="cube-face cube-left inner side"></div>
                                <div className="cube-face cube-right inner side"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Title width='0'>
                    <span className='text-purple'>/</span>
                    contacts
                </Title>
                <p className='mt-4'>How can you contact me?</p>
                <div className='mt-[45px] mb-[145px] flex justify-between flex-wrap gap-4'>
                    <p className='max-w-[500px] text-gray'>
                        I’m interested in the job offer.
                        However, if you have other request or question,
                        don’t hesitate to contact me
                    </p>
                    <div className='mt-8 md:mt-0 p-[16px] border border-gray bg-pageBg'>
                        <h5>Message me here</h5>
                        <div className='mt-4'>
                            <div className='flex items-center gap-2 text-gray'>
                                <a href="https://t.me/d_ilyaa">
                                    <FontAwesomeIcon className='h-6 hover:text-white duration-200'
                                        icon={faTelegram}
                                    />
                                </a>
                                <p>@d_ilyaa</p>
                            </div>
                            <div className='mt-2 flex items-center gap-2 text-gray '>
                                <FontAwesomeIcon className='h-6 hover:text-white duration-200 cursor-pointer'
                                    icon={icon({ name: 'envelope' })}
                                    onClick={copy}
                                />
                                <p>zarxymen@gmail.com</p>
                            </div>
                            <ToastContainer
                                toastContainerClassName='  '
                                toastClassName=' w-fit '
                                bodyClassName='  ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;
