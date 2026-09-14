export const navigation = [
	{
		title: 'Home',
		url: '/',
		subLinks: [
			{
				title: 'About',
				url: '/about'
			},
			{
				title: 'Contact',
				url: '/contact',
				subLinks: [ { title: 'New page', url: '/' } ]
			}
		]
	},
	{ title: 'About', url: '/about' },
	{
		title: 'Contact',
		url: '/contact',
		subLinks: [
			{
				title: 'About',
				url: '/about',
				subLinks: [{ title: 'New', url: '/' }]
			},
			{ title: 'Home', url: '/' } ]
	}
]

export const logo = {
	url: '/images/logo/dd-logo-white-v2.png',
	alt: 'Deeply Rooted Designs'
}