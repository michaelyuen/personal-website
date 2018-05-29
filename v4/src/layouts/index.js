import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SidenavContainer from '../containers/sidenav/sidenav';
import '../styles/main.scss'
import style from './style.module.scss'

const Layout = ({ children, data }) => (
	<div id="My" className={style.My}>
		<Helmet title={data.site.siteMetadata.title} />

		<SidenavContainer />

		<div className={style.MyContent}>
			<div className={style.stars}></div>
			<div className={style.stars2}></div>
			<div className={style.stars3}></div>
			{children()}
			<div className={style.skyline}></div>
		</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
