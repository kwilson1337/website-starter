<template>
    <NuxtLayout class="kw-error-page">
        <Section>
            <div class="kw-error-page__inner">
                <div class="kw-error-page__title">
                    <h1>404</h1>
                    <h2>Looks like you've wandered off the trail.</h2>
                </div>

                <div class="kw-error-page__actions">
                    <Button
                        class="--button4"
                        to="/"
                        icon="mdiArrowRightBold"
                    >
                        Go Back Home
                    </Button>
                </div>

                <div class="kw-error-page__links-container">
                    <h3>Explore</h3>
                    <div class="kw-error-page__links">
                        <Cards
                            v-for="card in cardData"
                            :key="card.title"
                            :card="card"
                        />
                    </div>
                </div>
            </div>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import Section from '@/components/section'
import Button from '@/components/links'
import Cards from '@/components/cards/ErrorPage.vue'
import { useConstants } from '@/composables/useConstants';

const constants = useConstants()
const cardData = [
	{
		icon: 'mdiHome',
		title: 'Home',
		description: `Explore the ${constants.getConfigByKey('siteInfo')?.name} website.`,
		link: {
			title: 'Home',
			url: '/'
		}
	},
	{
		icon: 'mdiAccountCircle',
		title: 'About',
		description: `Learn about ${constants.getConfigByKey('siteInfo')?.name} and what we have to offer.`,
		link: {
			title: 'About',
			url: '/about'
		}
	},
	{
		icon: 'mdiPhone',
		title: 'Contact',
		description: 'Feel free to reach out at anytime.',
		link: {
			title: 'Contact',
			url: '/contact'
		}
	}
]
</script>

<style lang="scss" scoped>
.kw-error-page {
    &__title {
        color: $color3;
        text-align: center;

        h1 {
            @include rfs(36, 250);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &:deep(.loading-animation) {
            width: rem(180);
            margin-bottom: rem(-40);
        }
    }

    &__actions {
        margin: rem(30) 0px rem(50);
        text-align: center;

        a.kw-button {
            @include rfs(18, 24);
        }
    }

    &__links-container {

        h3 {
            @include rfs(18, 36);
            color: $color3;
            @include title-decorator($color4);
            margin-bottom: rem(40);
        }
    }

    &__links {
        @include auto-grid(300px, 1fr);
        gap: rem(15);
    }
}
</style>