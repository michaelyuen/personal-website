import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import NavContainer from '../../components/nav/nav';
import '../../styles/main.scss'
import style from './layout.module.scss'

const Layout = ({ children, data }) => (
	<StaticQuery
		query={graphql`
			{
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div id="My" className={style.My}>
				<Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
				<NavContainer />
				<div className={style.MyContent}>
					<div className={style.stars}></div>
					<div className={style.stars2}></div>
					<div className={style.stars3}></div>
					<div className={style.MyChildren}>
						{children}
					</div>
					<div className={style.skyline}></div>
				</div>
			</div>
		)}
	/>
)

export default Layout
