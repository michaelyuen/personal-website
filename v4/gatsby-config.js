module.exports = {
	siteMetadata: {
		title: 'Michael Clayton Yuen | Frontend Engineer'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'limelight',
					'source sans pro\:300,400,400i,700'
				]
			}
		}
	]
}
