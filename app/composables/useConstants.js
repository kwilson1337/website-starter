export const useConstants = () => {
	const appConfig = useAppConfig()

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
			display: appConfig.contactInfo.address
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

	return {
		websiteLogo,
		userPhoneNumbers,
		websiteNavigation,
		userAddress,
		userEmailAddress,
		useSocials
	}
}