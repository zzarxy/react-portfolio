import React from 'react';
import classes from './Hello.module.css';
import MyButton from '../../../components/UI/MyButton/Mybutton.tsx';
import { Link } from 'react-router-dom';


const Hello = () => {
    return (
        <div className='indent'>
            <div className='container'>
                <div className='firsBlockRow mt-16 flex justify-center md:justify-between items-center'>
                    <div className='max-w-[500px]'>
                        <h2 className=' text-[32px] font-medium leading-[42px]'>Hello every body,<br /> my name is <span className={classes.purple}>Ilya</span> and i am <span className={classes.purple}>front-end developer</span></h2>
                        <p className='mt-8 leading-[25px] text-gray'>with passion for learning and creating.</p>
                        <Link to='/contacts'>
                            <MyButton className='mt-6' onClick={() => console.log('click')}>Contact me!!</MyButton>
                        </Link>
                    </div>
                    <div className='mr-[20px] w-[270px] text-[32px] hidden lg:block'>
                        <pre className={`${classes.line} ${classes.line1}`}><span className={classes.purple}>while</span> <span className='yelow'>(</span><span className={classes.blue}>alive</span><span className='yelow'>)</span> <span>{`{`}</span></pre>
                        <pre className={`${classes.line} ${classes.line2}`}>   <span className={classes.yelow}>eat</span>();</pre>
                        <pre className={`${classes.line} ${classes.line3}`}>   <span className={classes.yelow}>sleep</span>();</pre>
                        <pre className={`${classes.line} ${classes.line4}`}>   <span className={classes.yelow}>code</span>();</pre>
                        <pre className={`${classes.line} ${classes.line5}`}>   <span className={classes.yelow}>repeat</span>();</pre>
                        <pre className={`${classes.line} ${classes.line6}`}><span>{`}`}</span></pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hello;

// 