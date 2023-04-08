import classes from './MyButton.module.css';
import React, { ButtonHTMLAttributes } from 'react';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

const Mybutton: React.FC<MyButtonProps> = ({children, secondary, ...props}) => {
    return (
        <button {...props} className={`${secondary? classes.myBtnSecondary : classes.myBtnPrimary} ${props.className}`}> 
            {children}
        </button>
    );
};

export default Mybutton;