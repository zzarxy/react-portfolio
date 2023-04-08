import React from 'react';
import Title from '../../components/title/Title';
import MyButton from '../../components/UI/MyButton/Mybutton.tsx';
import { Link } from 'react-router-dom';

import robo from "../../img/decorations/robo.gif"

const About = () => {
    return (
        <div className=' about-me mt-[112px] indent'>
            <div className='container'>
                <Title width="40%">
                    <span className='text-purple'>#</span>
                    about-me
                </Title>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[80px] mt-6 lg:mt-0'>
                    <div className='pt-10 max-w-[600px]'>
                        <p className='text-gray'>
                            Hello, i’m Ilya!
                            <br />
                            <br />
                            I’m a self-taught front-end developer based
                            in Kyiv, Ukraine. I can develop responsive websites
                            from scratch and raise them into modern user-friendly
                            web experiences.
                            <br />
                            <br />
                            If you're looking for a dedicated
                            and talented front-end developer, feel free to get in
                            touch with me. Let's work together to
                            bring your ideas to life and create
                            something truly amazing!
                        </p>
                        <Link to='/about-me'>
                            <MyButton className='mt-[27px]'>Read more -{">"}</MyButton>
                        </Link>

                    </div>
                    <div className='robo w-[400px] h-[400px]'>
                        <img src={robo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;