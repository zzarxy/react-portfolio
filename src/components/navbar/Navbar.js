import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Burger from '../burger/Burger';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	const [menuActive, setMenuActive] = useState(false)

	return (
		<nav className='pt-4 md:pt-8 px-[20px]'>
			<div className=" md:container ">
				<div className="nav-row h-[50px]">
					<NavLink to="/" className="logo">
						<img src={require('./../../img/icons/logo.png')} width={100} height={100} />
					</NavLink>

					<ul className="nav-list">
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

					<div className={' menu-icon ' + (menuActive ? ' fixed right-[20px]' : ' relative ')}
						onClick={() => setMenuActive(!menuActive)}
					>
						<input className="menu-icon__cheeckbox" type="checkbox" />
						<div>
							<span></span>
							<span></span>
						</div>
					</div>

					<Burger active={menuActive} setAcyive={setMenuActive} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;