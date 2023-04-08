import React, { useState } from 'react';
import Title from '../../components/title/Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
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
        <div className='contacts mt-[112px] indent'>
            <div className='container'>
                <Title width={"130px"}>
                    <span className='text-purple'>#</span>
                    contacts
                </Title>
                <div className='mt-[45px] mb-[145px] flex justify-between flex-wrap gap-8'>
                    <p className='max-w-[500px] text-gray'>
                        I’m interested in the job offer.
                        However, if you have other request or question,
                        don’t hesitate to contact me
                    </p>
                    <div className='p-[16px] border border-gray bg-pageBg'>
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

export default Contacts;