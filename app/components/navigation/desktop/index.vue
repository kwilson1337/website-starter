<template>
    <header class="kw-desktop-nav">
       <Container>
            <div class="kw-desktop-nav__inner">
                <div class="kw-desktop-nav__logo">
                    <NuxtLink to="/">
                        <img :src="logo.url" :alt="logo.alt">
                    </NuxtLink>
                </div>
                <div class="kw-desktop-nav__links">
                    <template v-for="(link, index) in navigation" :key="link.title">
                        <div class="kw-desktop-nav__top-link">
                            <NuxtLink
                                :to="link.url"
                            >
                                {{link.title}}
                                <MdiIcon v-if="link.subLinks" icon="mdiChevronDown" />
                            </NuxtLink>

                            <RecursiveSubMenu 
                                :menu-items="link.subLinks" 
                                :is-last-of-type="index === navigation.length - 1"
                            />
                        </div>
                    </template>
                </div>
            </div>
       </Container>
    </header>
</template>

<script setup>
import { navigation, logo } from '../constants'
import Container from '@/components/section/container'
import RecursiveSubMenu from './RecursiveSubMenu.vue';
</script>

<style lang="scss" scoped>
.kw-desktop-nav {
    position: sticky;
    top: 0px;
    background-color: $color2;
    padding: rem(15) 0px;
    z-index: 100;

    @include mq('md') {
        display: none;
    }

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        max-width: rem(250);
    }

    &__links {
        display: flex;
        align-items: center;
    }

    &__top-link {
        position: relative;

        a {
            color: $white;
            text-decoration: none;
            font-size: rem(18);
            padding: rem(8) rem(16);
            transition: $transition;
            display: flex;
            align-items: center;
        }

        svg {
            transition: $transition;
            font-size: rem(24);
        }

        &:hover {
            > a {
                color: $color4;

                svg {
                    transform: rotate(180deg);
                }
            }

            .recusive-sub-menu {
                opacity: 1;
                visibility: visible;
            }
        }

        &:last-of-type {
            .recusive-sub-menu {
                left: rem(-60);
            }
        }        

        & + .kw-desktop-nav__top-link {
            margin-left: rem(15);
        }
    }

}
</style>