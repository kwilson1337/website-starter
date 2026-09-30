<template>
    <Section class="kw-contact-page">
        <div class="kw-contact-page__inner">
            <div class="kw-contact-page__col --left">
                <ContactInfo />
            </div>
            <div class="kw-contact-page__col --right">
                <ContactForm />
            </div>
        </div>        
    </Section>    
</template>

<script setup>
import ContactForm from '@/components/ContactForm'
import Section from '@/components/section'
import ContactInfo from '@/components/contact-info'

useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'My Contact page' },
  ],
})
</script>

<style lang="scss" scoped>
.kw-contact-page {
    background-color: $white;

    &__inner {
        @include auto-grid(400px, 1fr);
        gap: rem(20);
    }

    &__col {
        &.--left {
            padding: rem(20);
            border-radius: $border-radius;
            border: 1px solid $color2;
        }
    }
}
</style>