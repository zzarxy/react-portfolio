import React from 'react';

import Title from '../../components/title/Title';
import CompleteApps from './CompleteApps';
import SmallProjects from './SmallProjects';

const Projects = () => {
    return (
        <div className='indent'>
            <div className='container mt-14'>
                <Title width='0'>
                    <span className='text-purple'>/</span>
                    projects
                </Title>
                <p className='mt-4'>List of my projects</p>
            </div>
            <CompleteApps />
            {/* <SmallProjects /> */}
        </div>
    );
};

export default Projects;