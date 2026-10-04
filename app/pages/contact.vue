<template>
    <Section class="kw-contact-page">
        <div class="kw-contact-page__inner">
            <div class="kw-contact-page__col --left">
                <h3 class="h2">Get in touch</h3>
                <ContactInfo />
                <Socials />
            </div>
            <div class="kw-contact-page__col --right">
                <ContactForm />
            </div>
        </div>
    </Section>
</template>

<script setup>
import ContactForm from '@/components/contact-form'
import Section from '@/components/section'
import ContactInfo from '@/components/contact-info'
import Socials from '@/components/socials'

useHead({
	title: 'Contact',
	meta: [
		{ name: 'description', content: 'My Contact page' },
	],
})
</script>

<style lang="scss" scoped>
.kw-contact-page {
    background-color: $color1;

    &__inner {
        @include auto-grid(400px, 1fr);
        gap: rem(20);
    }

    &__col {
        &.--left {
            padding: rem(20);
            border-radius: $border-radius;
            border: 1px solid $color2;
            background-color: $color3;
            @include box-shadow($black);

            > div {
                margin-top: rem(15);
            }

            &:deep(a) {
                color: $white;

                &:hover {
                    color: $color4;
                }
            }
        }

        h3 {
            position: relative;
            display: inline-block;
            @include title-decorator();
        }
    }
}
</style>