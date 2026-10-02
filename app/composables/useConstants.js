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
		return appConfig.businessInfo.phone
	}

	const userEmailAddress = () => {
		return appConfig.businessInfo.email
	}

	const userAddress = () => {
		return {
			link: appConfig.businessInfo.addressLink,
			display: appConfig.businessInfo.address.pretty
		}
	}

	const useAddressSchema = () => {
		const omit = ['pretty']

		return {
			...Object.fromEntries(Object.entries(appConfig.businessInfo.address).filter(([key]) => !omit.includes(key)))
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
				priceRange: getConfigByKey('businessInfo').priceRange,
				address: {
					streetAddress: useAddressSchema().streetAddress,
					addressLocality: useAddressSchema().addressLocality,
					addressRegion: useAddressSchema().addressRegion,
					postalCode: useAddressSchema().postalCode,
					addressCountry: 'US'
				},
				geo: getConfigByKey('businessInfo').geo,
				openingHoursSpecification: getConfigByKey('businessInfo').workHours,
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