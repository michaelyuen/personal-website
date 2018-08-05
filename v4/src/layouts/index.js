import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavContainer from '../containers/nav/nav';
import '../styles/main.scss'
import style from './index.module.scss'

const Layout = ({ children, data }) => (

	<div id="My" className={style.My}>

		<Helmet title={data.site.siteMetadata.title} />

		<NavContainer />

		<div className={style.MyContent}>
			<div className={style.stars}></div>
			<div className={style.stars2}></div>
			<div className={style.stars3}></div>
			<div className={style.MyChildren}>
				{children()}
			</div>
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
