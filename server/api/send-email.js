import { useSendEmail } from '@/composables/useSendEmail'

const RESPONSE_MESSAGES = {
	SUCCESS: 'Email was sent successfully. We will get back to you as soon as possible.',
	ERROR: 'Failed to send email. Please try again later.'
}

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const { formatEmail } = useSendEmail()

	try {
		const sendEmail = await formatEmail({
			firstName: body.firstName,
			lastName: body.lastName,
			email: body.email,
			details: body.details
		})

		if(!sendEmail.rejected.length) {
			return {
				statusCode: 200,
				success: true,
				statusMessage: RESPONSE_MESSAGES.SUCCESS
			}
		} else {
			throw createError({
				statusCode: 500,
				success: false,
				statusMessage: RESPONSE_MESSAGES.ERROR
			})
		}

	} catch (error) {
		throw createError({
			statusCode: 500,
			success: false,
			statusMessage: RESPONSE_MESSAGES.ERROR,
			errorMessage: error.message
		})
	}
})