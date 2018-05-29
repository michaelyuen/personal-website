import React from 'react'
import Link from 'gatsby-link'

import Avatar from '../../components/avatar/avatar';
import Sidenav from '../../components/sidenav/sidenav';

import { config } from './config';
import style from './style.module.scss';

const SidenavContainer = ({ data }) => (
	<article className={style.article}>
		<h1>
			<Link to="/">Michael Clayton Yuen</Link>
		</h1>
		{/* <Avatar />
		<Sidenav items={config.items} /> */}
	</article>
)

export default SidenavContainer