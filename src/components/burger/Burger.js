import React from 'react';
import { NavLink } from 'react-router-dom';

const Burger = ({ active, setActive }) => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <div className={'w-[100%] h-[100vh] fixed right-0 top-0 z-0 backdrop-blur ease-out duration-200 md:hidden'
            + (active ? ' translate-x-[0] ' : ' translate-x-[100%] ')}>
            <div className='bg-black/80 h-[100vh] flex flex-col items-center'>
                <h3 className='text-[32px] mt-[30%] font-medium ' >{'<Menu / >'}</h3>
                <ul className="mt-4 flex flex-col text-[24px] gap-4">
                    <li className="nav-list__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                        >
                            <span>#</span>home
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                        >
                            <span>#</span>projects
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to="/about-me"
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                        >
                            <span>#</span>about-me
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                        >
                            <span>#</span>contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Burger;