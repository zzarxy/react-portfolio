import React, { useState } from 'react';

import Title from '../../../components/title/Title';
import CardsList from '../../../components/cards/CardsList';

const Projects = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            img: require("../../../img/cards/songbird.png"),
            title: "HTML5 SCSS JavaScript WebPack ",
            bodyTitle: "Songbird",
            body: "Audio quiz",
            link: "https://rolling-scopes-school.github.io/zzarxy-JSFE2022Q3/songbird/dist/index.html"
        },
        {
            id: 2,
            img: require("../../../img/cards/Puzzle.png"),
            title: "HTML CSS JavaScript",
            bodyTitle: "Puzzle",
            body: "Simple game",
            link: "https://rolling-scopes-school.github.io/zzarxy-JSFE2022Q3/rss-game-puzzle/index.html"
        },
        {
            id: 3,
            img: require("../../../img/cards/Online-zoo.png"),
            title: "HTML CSS JavaScript",
            bodyTitle: "Online-zoo",
            body: "Zoo website",
            link: "https://rolling-scopes-school.github.io/zzarxy-JSFE2022Q3/online-zoo/pages/main/index.html"
        },
    ])

    return (
        <div className='projects mt-[74px] indent'>
            <div className='container'>
                <Title link='/projects' width="510px">
                    <span className='text-purple'>#</span>
                    projects
                    </Title>
                <div className='mt-12'>
                    <CardsList 
                    posts={posts} 
                        className=' flex flex-col gap-4 md:flex-row items-center'
                    card=' w-[90%] lg:w-[33%]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
