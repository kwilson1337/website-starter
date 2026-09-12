<template>
    <header class="kw-mobile-navigation">
        <Container>
            <div class="kw-mobile-navigation__inner">                
                <div class="kw-mobile-navigation__logo">
                    <img :src="logo.url" :alt="logo.alt">
                </div>
                <div class="kw-mobile-navigation__action" :class="{ '--active' : isActive }">
                    <button @click="isActive = !isActive">
                        <span v-for="num in 3"></span>
                    </button>
                </div>
            </div>            
        </Container>
    </header>    

    <div v-if="isActive" class="kw-mobile-navigation__link-container">
        <Container>
            <div class="kw-mobile-navigation__links">
                <NuxtLink v-for="link in navigation">{{ link.title }}</NuxtLink>
            </div>
        </Container>
    </div>
</template>

<script setup>
import { navigation, logo } from '../constants'
import Container from '@/components/section/container'

const isActive = ref(false)
</script>

<style lang="scss" scoped>
.kw-mobile-navigation {
    display: none;
    padding: rem(5) 0px;
    position: sticky;
    top: 0px;
    background-color: $color2;

    @include mq('md') {
        display: block;
    }

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        max-width: rem(250);
    }

    &__action {
        
        button {
            position: relative;
            width: rem(40);
            height: rem(40);
            border: none;
            background-color: transparent; 
            
            &:hover {
                cursor: pointer;
            }                         
        }

        span {
            width: 100%;
            height: rem(3);
            display: block;
            background-color: $color3;
            border-radius: $border-radius;
            transition: $transition;            

            & + span {
                margin-top: rem(5);
            }                    
        }

        &.--active {
            button span {
                opacity: 0;
                visibility: hidden;                

                &:first-of-type,
                &:last-of-type {
                    opacity: 1;
                    visibility: visible;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin: 0px;
                }

                &:first-of-type {
                    transform: translate(-50%, -50%) rotate(45deg);                    
                }

                &:last-of-type {
                    transform: translate(-50%, -50%) rotate(-45deg);                    
                }
            }
        }
    }

    &__link-container {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: $color2;
        border-top: 2px solid $color3;
        padding-top: rem(20);
    }

    &__links {
        text-align: center;

        a {
            display: block;
            @include rfs(24, 36);

            & + a {
                margin-top: rem(20);
            }
        }
    }
}
</style>