import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__logo}>
				{/* <img src='http://brend-logo.ru/assets/976fb447/images/cssp_logo.png' alt='aaa' /> */}
				<img src='https://de.seedfinder.eu/pics/00breeder/420seeds.png' alt='logo' />
			</div>
		</header>
	)
}

export default Header;
