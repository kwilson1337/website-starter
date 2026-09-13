<template>
  <header class="kw-mobile-navigation">
    <Container>
      <div class="kw-mobile-navigation__inner">
        <div class="kw-mobile-navigation__logo">
          <img :src="logo.url" :alt="logo.alt">
        </div>
        <div class="kw-mobile-navigation__action" :class="{ '--active' : menuOpen }">
          <button @click="toggleBurger">
            <span v-for="num in 3" :key="num"/>
          </button>
        </div>
      </div>
    </Container>
  </header>

  <div class="kw-mobile-navigation__link-container" :class="{ '--active' : menuOpen }">
    <Container>
      <div class="kw-mobile-navigation__links">
        <div
          v-for="link in navigation"
          :key="link.title"
          class="kw-mobile-navigation__link"
          :class="{'--sub-active' : openMenuTitle === link.title}"
        >
          <div class="kw-mobile-navigation__link-row">
            <NuxtLink :class="{'--has-children' : link.subLinks}" :to="link.url" @click="resetMenu">
              {{ link.title }}
            </NuxtLink>
            <MdiIcon v-if="link.subLinks" icon="mdiChevronDown" @click="toggleSubLink(link.title)" />
          </div>

          <!-- 1. Wrapped the conditional div inside a named Vue Transition -->
          <Transition name="dropdown">
            <div v-if="link.subLinks && openMenuTitle === link.title" class="kw-mobile-navigation__sub-links">
              <div v-for="sub in link.subLinks" :key="sub.title" class="kw-mobile-navigation__link --sub">
                <NuxtLink :to="sub.url" @click="resetMenu">
                  {{ sub.title }}
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigation, logo } from '../constants'
import Container from '@/components/section/container'

const menuOpen = ref(false)
const openMenuTitle = ref(null)

const toggleBurger = () => {
	menuOpen.value = !menuOpen.value

	if(!menuOpen.value) {
		openMenuTitle.value = null
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

    &__link-container {
        position: fixed;
        width: 100%;
        height: 0%;
        background-color: $color2;
        border-top: 2px solid $color3;
        padding-top: rem(20);
        opacity: 0;
        visibility: hidden;
        transition: $transition;

        &.--active {
        opacity: 1;
        visibility: visible;
        height: 100%;
        transform-origin: 0%;
        }
    }

    &__links {
        text-align: center;
        padding-top: rem(40);
    }

    &__link-row {
        display: flex;
        align-items: center;
        justify-content: center;

        a {

            &.--has-children {
                margin-left: rem(38);
            }
        }
    }

    &__link {

        a {
            display: block;
            @include rfs(24, 48);
            color: $color3;
            text-decoration: none;
            transition: $transition;

            &:hover { 
                color: $color4; 
            }
        }

        svg {
            transition: $transition;
            color: $color3;
            font-size: rem(24);
            width: rem(25);
            height: rem(25);
            cursor: pointer;
            margin-left: rem(15);
            border: 1px solid $color3;
            border-radius: $border-radius;
        }

        & + .kw-mobile-navigation__link {
            margin-top: rem(20);
        }

        &.--sub-active {
            svg {
                transform: rotate(180deg)
            }
        }

        &.--sub {

            a {
                @include rfs(18, 28);
                padding: rem(15);
                background-color: #efefef;                

                &:hover {
                    background-color: $color4;
                    color: $white;
                }

                & + a {
                    border-top: 1px solid $color3;
                }
            }

            & + .kw-mobile-navigation__link {
                margin-top: 0px;
                border-top: 1px solid $color3;
            }
        }
    }

    &__sub-links {
        display: inline-block;
        position: relative;
        border-radius: $border-radius;
        border: 1px solid $color3;
        text-align: left;
        margin-top: rem(15);
        overflow: hidden;
        width: rem(160);
        margin-left: rem(40);
    }
}

/**
 * Animation styles
 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.25s ease,
              max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: rem(300); 
  transform-origin: top center;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0.9);
}
</style>
