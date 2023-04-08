import React from 'react';
import Title from '../../components/title/Title';
import MyButton from '../../components/UI/MyButton/Mybutton.tsx';
import { Link } from 'react-router-dom';

// import './Decoration.css'

import robo from "../../img/decorations/roboDraw.gif"

const About = () => {
    return (
        <div className=' lg:mt-[112px]'>
            <div className='container'>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[80px] mt-6 lg:mt-0'>
                    <div className='pt-10 max-w-[500px]'>
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
                    </div>
                    <div className='robo w-[400px] h-[400px] mt-8 lg:mt-0'>
                        <div className='mt-[80px] w-[450px]' >
                            <img src={robo} alt="" className=' mb-6 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;