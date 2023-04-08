import React from 'react';
import Title from '../../components/title/Title';
import About from './About';
import Skills from './Skills';

const AboutPage = () => {
    return (
        <div className='indent'>
            <div className='container mt-14'>
                <Title width='0'>
                    <span className='text-purple'>/</span>
                    about-me
                </Title>
                <p className='mt-4'>Who am i?</p>
            </div>
            <About />
            <Skills />
        </div>
    );
};

export default AboutPage;