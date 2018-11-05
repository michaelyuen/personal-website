import React from 'react'
import { Link } from 'gatsby'
import Menu from '../../components/menu/menu';
import { config } from './config';
import style from './nav.module.scss';

const NavContainer = () => (
	<nav className={style.MyNav}>
    <Link to="/">MCY</Link>
		<Menu items={config.items}/>
	</nav>
)

export default NavContainer