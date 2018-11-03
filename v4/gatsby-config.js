module.exports = {
	siteMetadata: {
		title: 'Michael Clayton Yuen | Frontend Engineer'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			// leave as example and for testing
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'playfair display',
          'source sans pro\:300,400,400i,700',
          'open sans',
				]
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /svg/
				}
			}
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve('./src/components/layout/layout.js')
			}
		}
	]
}
