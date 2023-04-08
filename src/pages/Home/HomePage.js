import React from 'react';

import Hello from './Hello/Hello';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import About from './About';
import Contacts from './Contacts';

const Home = () => {
    return (
        <div className=''>
            <Hello />
            <Projects />
            <Skills />
            <About />
            <Contacts />
        </div>
    );
};

export default Home;