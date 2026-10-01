<template>
    <footer class="section kw-footer">
        <Container>
            <div class="kw-footer__inner">
                <div class="kw-footer__col --logo">
                    <NuxtLink to="/">
                        <img :src="constants.websiteLogo().url" :alt="constants.websiteLogo().alt">
                    </NuxtLink>
                </div>
                <div class="kw-footer__col --links">
                    <h4>Links</h4>
                    <ul>
                        <li
                            v-for="link in constants.websiteNavigation({ specifics: ['Home', 'About', 'Contact'] })"
                            :key="link.title"
                        >
                            <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="kw-footer__col --contact">
                    <h4>Contact Us</h4>
                    <ContactInfo />
                    <Socials />
                </div>
            </div>
        </Container>
    </footer>

    <CopyWriteBar />
</template>

<script setup>
import Container from '@/components/section/container'
import { useConstants } from '@/composables/useConstants'
import ContactInfo from '@/components/contact-info'
import Socials from '@/components/socials'
import CopyWriteBar from './CopyWriteBar.vue'

const constants = useConstants()
</script>

<style lang="scss" scoped>
.kw-footer {
    background-color: $color3;

    &__inner {
        @include auto-grid(300px, 1fr);
        gap: rem(15);
    }

    &__col {

        &:deep(a) {
            color: $white;

            &:hover {
                color: $color4;
            }
        }

        h4 {
            margin: 0px;
        }

        &.--logo {
            max-width: rem(250);
        }

        &.--links {

            ul {
                list-style: none;
                padding-left: 0;

                li + li {
                    margin-top: rem(15);
                }
            }
        }

        &.--contact {
            display: flex;
            flex-direction: column;
            gap: rem(15);
        }
    }
}
</style>