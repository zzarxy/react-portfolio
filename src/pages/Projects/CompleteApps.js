import React, { useState } from 'react';

import Title from '../../components/title/Title';
import CardsList from '../../components/cards/CardsList';

const CompleteApps = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            img: require("../../img/cards/songbird.png"),
            title: "HTML5 SCSS JavaScript WebPack ",
            bodyTitle: "Songbird",
            body: "Audio quiz",
            link: "https://rolling-scopes-school.github.io/zzarxy-JSFE2022Q3/songbird/dist/index.html"
        },
        {
            id: 2,
            img: require("../../img/cards/Puzzle.png"),
            title: "HTML CSS JavaScript",
            bodyTitle: "Puzzle",
            body: "Simple game",
            link: "https://rolling-scopes-school.github.io/zzarxy-JSFE2022Q3/rss-game-puzzle/index.html"
        },
        {
            id: 3,
            img: require("../../img/cards/Online-zoo.png"),
            title: "HTML CSS JavaScript",
            bodyTitle: "Online-zoo",
            body: "Zoo website",
            link: "https://rolling-scopes-school.github.io/zzarxy-JSFE2022Q3/online-zoo/pages/main/index.html"
        },
        {
            id: 4,
            img: require("../../img/cards/Portfolio.png"),
            title: "React TS TailWind",
            bodyTitle: "Portfolio",
            body: "You're using it rn",
            link: "/"
        },
    ])

    return (
        <div className='complete-apps mt-[74px] mb-[187px]'>
            <div className='container'>
                <Title width="0">
                    <span className='text-purple'>#</span>
                    complete-apps
                </Title>
                <div className='mt-12'>
                    <CardsList posts={posts}
                        className=' grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 '
                        card='  '
                     />
                </div>
            </div>
        </div>
    );
};

export default CompleteApps;
