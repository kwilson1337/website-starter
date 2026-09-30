export default defineAppConfig({
	contactInfo: {
		email: 'hello@example.com',
		phone: '+1 (555) 019-2834',
		address: '2922 Rouen Ave Winterpark, FL 32789',
		addressLink: 'https://www.google.com/maps/place/2922+Rouen+Ave,+Winter+Park,+FL+32789/@28.6271846,-81.335033,17z/data=!3m1!4b1!4m6!3m5!1s0x88e76fd33d57fab9:0xac4bdf149cc34675!8m2!3d28.6271846!4d-81.3324527!16s%2Fg%2F11c137s2gt?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D',
		hours: 'Mon-Fri, 9am - 5pm'
	},
	socials: {
		instagram: 'instagram.com',
		facebook: 'facebook.com',
		linkedin: 'linkedin.com'
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