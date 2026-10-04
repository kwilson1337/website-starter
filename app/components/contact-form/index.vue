<template>
    <div class="kw-contact-form">
        <div class="kw-contact-form__inner">
            <form ref="contactForm">
                <div class="kw-contact-form__form-content">
                    <div class="kw-contact-form__hp" aria-hidden="true">
                        <label for="honey"/>
                        <input
                            id="honey"
                            v-model="formFields.honey"
                            name="honey"
                            type="text"
                            tabindex="-1"
                            autocomplete="off"
                        >
                    </div>

                    <div class="kw-contact-form__row">
                        <div class="kw-contact-form__input-container">
                            <input
                                id="firstName"
                                v-model="formFields.firstName"
                                required
                                type="text"
                                placeholder
                                :disabled="isLoading"
                            >
                            <label for="firstName">First name <span>*</span></label>
                        </div>
                        <div class="kw-contact-form__input-container">
                            <input
                                id="lastName"
                                v-model="formFields.lastName"
                                required
                                type="text"
                                placeholder
                                :disabled="isLoading"
                            >
                            <label for="lastName">Last name <span>*</span></label>
                        </div>
                    </div>

                    <div class="kw-contact-form__row">
                        <div class="kw-contact-form__input-container">
                            <input
                                id="emailAddy"
                                v-model="formFields.email"
                                required
                                type="email"
                                placeholder
                                :disabled="isLoading"
                            >
                            <label for="emailAddy">Email <span>*</span></label>
                        </div>
                    </div>

                    <div class="kw-contact-form__row">
                        <div class="kw-contact-form__input-container --details">
                            <textarea
                                id="details"
                                v-model="formFields.details"
                                required
                                placeholder
                                :disabled="isLoading"
                            />
                            <label for="details">Tell us about your project <span>*</span></label>
                        </div>
                    </div>

                    <div class="kw-contact-form__row">
                        <button
                            class="kw-button --button4"
                            :disabled="disableSubmit"
                            type="submit"
                            @click.prevent="sendMail"
                        >
                            Submit
                        </button>
                    </div>

                    <div class="kw-contact-form__row --message">
                        <div v-if="isLoading" class="kw-contact-form__animation">
                            <LoadingAnimation />
                        </div>

                        <p v-if="responseMessage">
                            <button type="button" aria-label="Dismiss message" @click="responseMessage = ''">
                                <MdiIcon icon="mdiClose" />
                            </button>
                            {{ responseMessage }}
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import LoadingAnimation from '@/components/loading-animation'

const formFields = ref({
	firstName: '',
	lastName: '',
	email: '',
	details: '',
	honey: ''
})

const isLoading = ref(false)
const responseMessage = ref('')
const contactForm = ref()

const disableSubmit = computed(() => {
	return isLoading.value ||
            !formFields.value.firstName ||
            !formFields.value.lastName ||
            !formFields.value.email ||
            !formFields.value.details
})

const sendMail = async () => {
	if(!contactForm?.value.checkValidity()) return
	if(formFields.value.honey) return

	try {
		responseMessage.value = ''
		isLoading.value = true

		const response = await $fetch('/api/send-email', {
			method: 'POST',
			body: {
				firstName: formFields.value.firstName,
				lastName: formFields.value.lastName,
				details: formFields.value.details,
				email: formFields.value.email,
				honeypot: formFields.value.honey
			},
		})

		responseMessage.value = response.statusMessage

	} catch (error) {
		responseMessage.value = error.statusMessage
	} finally {
		isLoading.value = false
		formFields.value.firstName = ''
		formFields.value.lastName = ''
		formFields.value.email = ''
		formFields.value.details = ''
		formFields.value.honey = ''
	}
}
</script>

<style lang="scss" scoped>
.kw-contact-form {

    // Visually hidden honeypot. Avoid display:none or visibility:hidden,
    // since some bots skip fields hidden that way.
    &__hp {
        position: absolute;
        left: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
    }

    &__row {
        @include auto-grid(200px, 1fr);
        gap: rem(10);

        & + .kw-contact-form__row {
            margin-top: rem(10);
        }

        textarea {
            min-height: rem(150);
        }

        button {
            width: 100%;
            cursor: pointer;
        }

        &.--message {
            text-align: center;

            p {
                width: 100%;
                color: $color3;
                margin: 0px;
                padding: rem(8) rem(16);
                background-color: $color2;
                border-radius: rem(20);
                position: relative;

                button {
                    position: absolute;
                    top: rem(-5);
                    right: rem(-5);
                    width: rem(25);
                    height: rem(25);
                    background-color: $white;
                    border-radius: 50%;
                    border: 1px solid $color3;
                    color: $black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    &__input-container {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: rem(10);

        label {
            color: $black;
            display: block;
            position: absolute;
            top: 50%;
            font-weight: 500;
            transform: translateY(-50%);
            left: rem(10);
            z-index: 0;
            transition: .2s ease-in-out all;
        }

        span {
            color: red;
        }

        &.--details {
            label {
                top: rem(15);
                transform: translateY(0);
            }

            textarea:focus,
            textarea:not(:placeholder-shown) {
                & + label {
                    top: rem(-20);
                }
            }
        }

        input:focus,
        input:not(:placeholder-shown) {
            & + label {
                top: -10px;
            }
        }
    }

    &__animation {
        max-width: rem(100);
        margin: auto;
    }
}
</style>