import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../../styles/main.scss'
import NavContainer from '../nav/nav'

const Layout = ({ children, location }) => (
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
			<div id="My">
				<Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
        { location.pathname === '/' ? null : <NavContainer /> }
        {children}
			</div>
		)}
	/>
)

export default Layout
