import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SidenavContainer from '../containers/sidenav/sidenav';
import '../styles/main.scss'
import './index.scss'

const Layout = ({ children, data }) => (
	<div id="My">
		<Helmet title={data.site.siteMetadata.title} />

		<SidenavContainer />

		<div className="MyContent">
			{children()}
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
