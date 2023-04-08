import React, { useState } from 'react';
import Title from '../../components/title/Title';
import CardsList from '../../components/cards/CardsList';

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
        <div className="mt-[105px]">
            <div className='container'>
                <Title width="0">
                    <span className='text-purple'>#</span>
                    skills
                </Title>
                <div className='mt-12 mb-[162px]'>
                    <CardsList
                        className=' flex gap-4 flex-wrap md:flex-nowrap '
                        card=''
                        posts={posts}
                    />
                </div>

            </div>
        </div>
    );
};

export default Skills;