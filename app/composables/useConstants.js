import { defineLocalBusiness } from 'nuxt-schema-org/schema'

export const useConstants = () => {
	const appConfig = useAppConfig()

	const getConfigByKey = (key) => {
		return appConfig[key]
	}

	const websiteLogo = () => {
		return appConfig.website.logo
	}

	const userPhoneNumbers = () => {
		return appConfig.contactInfo.phone
	}

	const userEmailAddress = () => {
		return appConfig.contactInfo.email
	}

	const userAddress = () => {
		return {
			link: appConfig.contactInfo.addressLink,
			display: appConfig.contactInfo.address.pretty
		}
	}

	const useAddressSchema = () => {
		const omit = ['pretty']

		return {
			...Object.fromEntries(Object.entries(appConfig.contactInfo.address).filter(([key]) => !omit.includes(key)))
		}
	}

	const useSocials = () => {
		return appConfig.socials
	}

	const websiteNavigation = ({ specifics = [] } = {}) => {
		if(specifics && Array.isArray(specifics) && specifics.length) {
			return appConfig.website.navigation.filter(link => specifics.includes(link.title))
		}

		return appConfig.website.navigation
	}

	const renderSiteSchema = () => {
		console.log('useAddressSchema' ,useAddressSchema())

		return useSchemaOrg([
			defineLocalBusiness({
				'@type': 'ProfessionalService', // pick the closest subtype from schema.org/LocalBusiness
				name: getConfigByKey('siteInfo')?.name,
				description: getConfigByKey('siteInfo')?.description,
				url: getConfigByKey('siteInfo')?.url,
				image: websiteLogo().url, //store front URL / possibly add
				logo: websiteLogo().url,
				telephone: userPhoneNumbers(),
				email: userEmailAddress(),
				priceRange: '$$',
				address: {
					streetAddress: useAddressSchema().streetAddress,
					addressLocality: useAddressSchema().addressLocality,
					addressRegion: useAddressSchema().addressRegion,
					postalCode: useAddressSchema().postalCode,
					addressCountry: 'US'
				},
				geo: {
					latitude: 28.8,
					longitude: -82.3
				},
				openingHoursSpecification: [
					{
						dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
						opens: '09:00',
						closes: '17:00'
					},
					{
						dayOfWeek: 'Saturday',
						opens: '10:00',
						closes: '14:00'
					}
				],
				sameAs: [
					Object.values(useSocials()),
				]
			})
		])
	}

	return {
		websiteLogo,
		userPhoneNumbers,
		websiteNavigation,
		userAddress,
		userEmailAddress,
		useSocials,
		renderSiteSchema,
		getConfigByKey
	}
}