import nodemailer from 'nodemailer';
import { ref } from 'vue'

export const useSendEmail = () => {
	const errors = ref([])

	const formatEmail = async ({
		firstName,
		lastName,
		email,
		details
	}) => {
		const transporter = nodemailer.createTransport({
			host: 'smtp.resend.com',
			secure: true,
			port: 465,
			auth: {				
				user: 'resend',				
				pass: process.env.RESEND_API,
			}
		});

		try {
			await transporter.sendMail({
				subject: `New inquiry from ${firstName} ${lastName}`,
				from: `contact.deeplydesigns.io`,
				to: 'kylejaywilson123@gmail.com',
				replyTo: email,
				html: `
                <div>
                    <p><strong>Name: </strong>${ firstName } ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${details}</p>
                </div>
                `
			})
		} catch(error) {
			errors.value.push(error)
		}
	}

	return {
		formatEmail,
		errors
	}
}