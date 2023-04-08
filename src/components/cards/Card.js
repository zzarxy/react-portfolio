import React from 'react';
import MyButton from '../UI/MyButton/Mybutton.tsx';

const Card = (props) => {
    return (
        <div {...props} className={`${props.className} ' h-fit border border-gray bg-pageBg '`}>
            <img src={props.post.img} alt="" />
            <hr className=' text-gray' />
            <p className='m-[8px] text-gray'>{props.post.title}</p>
            <hr className=' text-gray' />
            <div>
                <h4 className='m-[16px] text-[24px] font-medium '>{props.post.bodyTitle}</h4>
                <p className='m-[16px] text-gray'>{props.post.body}</p>
                {props.post.link &&
                    <MyButton
                        className='block m-[16px]'
                        onClick={() => window.open(props.post.link)} >
                        Live {'<'}~{'>'}
                    </MyButton>
                }
            </div>
        </div>
    );
};

export default Card;

// lg:w-[33%]