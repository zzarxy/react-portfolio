import React, { useState } from 'react';
import classes from './Skills.module.css'
import Title from '../../../components/title/Title';
import Card from '../../../components/cards/Card';
import CardsList from '../../../components/cards/CardsList';

const Skills = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            img: "",
            title: "Tools",
            bodyTitle: "",
            body: "VS VSCode Figma Git FontAwesome Adobe Photoshop",
            link: ""
        },
        {
            id: 2,
            img: "",
            title: "Other",
            bodyTitle: "",
            body: "HTML CSS SCSS",
            link: ""
        },
        {
            id: 3,
            img: "",
            title: "Frameworks",
            bodyTitle: "",
            body: "React TailWindcss",
            link: ""
        },
        {
            id: 4,
            img: "",
            title: "Technical Skills",
            bodyTitle: "",
            body: "Windows BIOS configuration",
            link: ""
        },
        {
            id: 5,
            img: "",
            title: "Languages",
            bodyTitle: "",
            body: "TypeScript JavaScript Node.Js C#",
            link: ""
        }
    ])

    return (
        <div className="mt-[105px] indent">
            <div className='container'>
                <Title width="27%">
                    <span className='text-purple'>#</span>
                    skills
                </Title>
                <div className={classes.skillsRow}>
                    <div className={`${classes.leftElement} hidden md:block `} ></div>
                    <CardsList
                        className=' flex lg:mt-[30px] lg:h-[290px] w-[584px] gap-[16px] lg:flex-wrap-reverse lg:flex-col flex-wrap '
                        card='lg:w-[33%]'
                        posts={posts}
                    />
                </div>

            </div>
        </div>
    );
};

export default Skills;
