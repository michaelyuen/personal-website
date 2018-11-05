import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../../styles/main.scss'
import NavContainer from '../nav/nav'

const Layout = ({ children }) => (
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
        { children.key !== '/' ? <NavContainer /> : null }
        {children}
			</div>
		)}
	/>
)

export default Layout
