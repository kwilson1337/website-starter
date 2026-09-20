<template>
    <div
        class="kw-mobile-navigation-full-screen"
        role="navigation"
        aria-label="Main Mobile Navigation"
    >
        <Container>
            <div class="kw-mobile-navigation-full-screen__links">
                <div
                    v-for="link in navigation"
                    :key="link.title"
                    class="kw-mobile-navigation-full-screen__link"
                    :class="{'--sub-active' : openMenuTitle === link.title}"
                >
                    <div class="kw-mobile-navigation-full-screen__link-row">
                        <NuxtLink
                            :class="{'--has-children' : link.subLinks}"
                            :to="link.url"
                            @click="resetMenu"
                        >
                            {{ link.title }}
                        </NuxtLink>

                        <button
                            v-if="link.subLinks"
                            :aria-expanded="openMenuTitle === link.title ? 'true' : 'false'"
                            :aria-controls="`fullscreen-submenu-${cleanId(link.title)}`"
                            :aria-label="`Toggle ${link.title} sub-menu`"
                            type="button"
                            class="kw-mobile-navigation-full-screen__toggle-btn"
                            @click="toggleSubLink(link.title)"
                        >
                            <MdiIcon icon="mdiChevronDown" aria-hidden="true" />
                        </button>
                    </div>

                    <Transition name="dropdown">
                        <div
                            v-if="link.subLinks && openMenuTitle === link.title"
                            :id="`fullscreen-submenu-${cleanId(link.title)}`"
                            class="kw-mobile-navigation-full-screen__sub-links"
                        >
                            <div
                                v-for="sub in link.subLinks"
                                :key="sub.title"
                                class="kw-mobile-navigation-full-screen__link --sub"
                            >
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
import Container from '@/components/section/container'

const emits = defineEmits(['fullScreen:toggleSubLinks', 'fullScreen:resetMenu'])
defineProps({
	navigation: {
		type: Array,
		default: () => []
	},
	openMenuTitle: {
		type: String,
		default: ''
	}
})

const cleanId = (str) => str.replace(/\s+/g, '-').toLowerCase()
const toggleSubLink = (title) => {
	emits('fullScreen:toggleSubLinks', title)
}

const resetMenu = () => {
	emits('fullScreen:resetMenu')
}
</script>

<style lang="scss" scoped>
.kw-mobile-navigation-full-screen {
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

    &__links {
        text-align: center;
        padding-top: rem(40);
    }

    &__toggle-btn {
        width: rem(35);
        height: rem(35);
        cursor: pointer;
        margin-left: rem(15);
        border: 1px solid $color3;
        border-radius: $border-radius;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        svg {
            transition: $transition;
            color: $color3;
            width: rem(25);
            height: rem(25);
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
        }

        & + .kw-mobile-navigation-full-screen__link {
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

            & + .kw-mobile-navigation-full-screen__link {
                margin-top: 0px;
                border-top: 1px solid $color3;
            }
        }
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
</style>