import React from 'react';
import classes from './Title.module.css'
import { NavLink } from 'react-router-dom';

const Title = ({ children, ...props}) => {
    return (
        <div {...props} className="flex items-center justify-start gap-[16px]">
            <h3 className='text-[32px] font-medium whitespace-nowrap'>
                {children}
            </h3>
            <hr className='text-purple grow-0 mr-auto w-[100%]' style={{maxWidth: props.width}}/>
            {props.link &&
                <NavLink to={props.link} className='font-medium text-gray whitespace-nowrap'>
                    View all ~~&gt;
                </NavLink>}
        </div>
    );
};

export default Title;

