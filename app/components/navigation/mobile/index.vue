<template>
  <header class="kw-mobile-navigation">
    <Container>
      <div class="kw-mobile-navigation__inner">
        <div class="kw-mobile-navigation__logo">
          <NuxtLink @click="toggleBurger" to="/">
            <img :src="logo.url" :alt="logo.alt">
          </NuxtLink>
        </div>
        <div class="kw-mobile-navigation__action" :class="{ '--active' : menuOpen }">
          <button @click="toggleBurger">
            <span v-for="num in 3" :key="num"/>
          </button>
        </div>
      </div>
    </Container>

    <Transition name="dropdown">
      <RecursiveMenu 
        v-if="menuOpen"
        :navigation="navigation"
        :openMenuTitle="openMenuTitle"
        @mobileRecursiveMenu:close="resetMenu"    
      />
    </Transition>  
  </header>
  

  <!-- <FullScreen 
    :class="{'--active' : menuOpen}" 
    :navigation="navigation" 
    :openMenuTitle="openMenuTitle"
    @fullScreen:toggleSubLinks="toggleSubLink" 
    @fullScreen:resetMenu="resetMenu"
  /> -->

  <div @click="toggleBurger" v-if="menuOpen" class="kw-mobile-navigation__overlay"></div>
</template>

<script setup>
import { ref } from 'vue'
import { navigation, logo } from '../constants'
import Container from '@/components/section/container'
import RecursiveMenu from './RecursiveMenu.vue'

const menuOpen = ref(false)
const openMenuTitle = ref(null)

const toggleBurger = () => {
	menuOpen.value = !menuOpen.value

  if(menuOpen.value) {
    document.querySelector('html').style.overflow = 'hidden' 
  }

	if(!menuOpen.value) {
		openMenuTitle.value = null
    document.querySelector('html').style.overflow = 'unset' 
	}
}

const resetMenu = () => {
	menuOpen.value = false
	openMenuTitle.value = null
}

const toggleSubLink = (title) => {
	if (openMenuTitle.value === title) {
		openMenuTitle.value = null
	} else {
		openMenuTitle.value = title
	}
}
</script>

<style lang="scss" scoped>
.kw-mobile-navigation {
    display: none;
    padding: rem(5) 0px;    
    position: sticky;
    top: 0px;
    background-color: $color2;
    z-index: 100;

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
          
          & + span { margin-top: rem(5); }
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

            &:first-of-type { transform: translate(-50%, -50%) rotate(45deg); }
            &:last-of-type { transform: translate(-50%, -50%) rotate(-45deg); }
          }
        }
    }    

    &__overlay {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0, .5);
    }
}
</style>
