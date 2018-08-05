import React from 'react'
import Link from 'gatsby-link'

import Avatar from '../../components/avatar/avatar';
import Menu from '../../components/menu/menu';

import { config } from './config';
import style from './style.module.scss';

const NavContainer = () => (

	<article className={style.article}>

		<h1>
			<Link to="/">Michael Clayton Yuen</Link>
		</h1>

		<Menu items={config.items}/>

	</article>
)

export default NavContainer