<template>
    <header class="kw-desktop-nav">
       <Container>
            <div class="kw-desktop-nav__inner">
                <div class="kw-desktop-nav__logo">
                    <img :src="logo.url" :alt="logo.alt">
                </div>
                <div class="kw-desktop-nav__links">
                    <template v-for="link in navigation" :key="link.title">
                        <div class="kw-desktop-nav__top-link">
                            <NuxtLink                        
                                :to="link.url"
                            >
                                {{link.title}}
                                <span v-if="link.subLinks">^</span>
                            </NuxtLink>
                            <div v-if="link.subLinks" class="kw-desktop-nav__sub-link">
                                <NuxtLink      
                                    v-for="sub in link.subLinks"                  
                                    :key="sub.title"
                                    :to="sub.url"
                                >
                                    {{sub.title}}
                                </NuxtLink>
                            </div>
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
</script>

<style lang="scss" scoped>
.kw-desktop-nav {
    position: sticky;
    top: 0px;
    background-color: $color2;
    padding: rem(15) 0px;

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
        }

        &:hover {
            > a {
                color: $color4;
            }

            .kw-desktop-nav__sub-link {
                opacity: 1;
                visibility: visible;
            }
        }    

        &:last-of-type {
            .kw-desktop-nav__sub-link {
                left: rem(-160);
            }
        }
        
        & + .kw-desktop-nav__top-link {
            margin-left: rem(15);
        }
    }

    &__sub-link {
        position: absolute;
        top: rem(30);
        width: 100%;
        min-width: rem(250);
        visibility: hidden;
        opacity: 0;
        transition: $transition;    
        border-radius: $border-radius;
        overflow: hidden;
        
        a {
            display: block;
            background-color: $color1;
            color: $color3;     
            transition: $transition;
            
            &:hover {
                background-color: $color3;
                color: $color1;
            }
        }
    }
    
}
</style>