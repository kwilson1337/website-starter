export default defineAppConfig({
	contactInfo: {
		email: 'hello@example.com',
		phone: '+1 (555) 019-2834',
		address: '123 Web Dev Lane, Suite 404',
		hours: 'Mon-Fri, 9am - 5pm'
	},
	website: {
		logo: {
			url: '/images/logo/dd-logo-white-v2.png',
	    alt: 'Deeply Rooted Designs'
		},
		navigation: [
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
						subLinks: [
							{ title: 'New page', url: '/' },
							{
								title: 'Sub Link',
								url: '/' ,
								subLinks: [{ title: 'New page', url: '/' }, { title: 'New page', url: '/' }, { title: 'New page', url: '/' }]
							}
						]
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
						subLinks: [
							{ title: 'New page', url: '/' },
							{ title: 'New page', url: '/' },
							{ title: 'New page', url: '/' },
							{
								title: 'Sub Link',
								url: '/' ,
								subLinks: [{ title: 'New page', url: '/' }, { title: 'New page', url: '/' }, { title: 'New page', url: '/' }]
							}
						]
					},
					{ title: 'Home', url: '/' } ]
			}
		]
	}
})