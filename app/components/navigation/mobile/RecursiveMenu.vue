<template>
    <div class="kw-mobile-menu-recursive">
        <div class="kw-mobile-menu-recursive__inner" role="menu">
            <div
                v-for="link in navigation"
                :key="link.title"
                class="kw-mobile-menu-recursive__link"
                :class="{'--active' : localOpenMenuTitle === link.title}"
                role="none"
            >
                <NuxtLink
                    :to="link.url"
                    role="menuitem"
                    @click="emits('mobileRecursiveMenu:close')"
                    @keydown.enter="emits('mobileRecursiveMenu:close')"
                >
                    {{ link.title }}
                </NuxtLink>

                <button
                    v-if="link.subLinks && link.subLinks.length"
                    :aria-expanded="localOpenMenuTitle === link.title ? 'true' : 'false'"
                    :aria-controls="`submenu-${cleanId(link.title)}`"
                    :aria-label="`Toggle ${link.title} sub-menu`"
                    type="button"
                    @click="toggleSubLink(link.title)"
                >
                    <MdiIcon icon="mdiChevronDown" aria-hidden="true" />
                </button>

                <Transition name="dropdown">
                    <div
                        v-if="link.subLinks && link.subLinks.length && localOpenMenuTitle === link.title"
                        :id="`submenu-${cleanId(link.title)}`"
                        class="kw-mobile-menu-recursive__sub-container"
                    >
                        <MobileRecursiveMenu :navigation="link.subLinks" class="--sub" />
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
	name: 'MobileRecursiveMenu'
})

const emits = defineEmits(['mobileRecursiveMenu:close'])
defineProps({
	navigation: {
		type: Array,
		default: () => []
	}
})

const cleanId = (str) => str.replace(/\s+/g, '-').toLowerCase()
const localOpenMenuTitle = ref('')
const toggleSubLink = (title) => {
	if (localOpenMenuTitle.value === title) {
		localOpenMenuTitle.value = ''
	} else {
		localOpenMenuTitle.value = title
	}
}
</script>

<style lang="scss" scoped>
.kw-mobile-menu-recursive {
    position: relative;
    width: 100%;
    z-index: 1000;
    margin-bottom: rem(-5);
    background-color: darken($color2, 20%);

    &.--sub {
        background-color: darken($color2, 40%);
    }

    &__link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        position: relative;

        & + .kw-mobile-menu-recursive__link {
            border-top: 1px solid darken($color2, 30%);
        }

        &.--active {
            > button svg {
                transform: rotate(-180deg);
            }
        }

        a {
            color: $white;
            text-decoration: none;
            padding: rem(15);
        }

        button {
            position: relative;
            height: rem(46);
            width: rem(46);
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: darken($color2, 50%);
            color: $white;
            cursor: pointer;

            svg {
                height: rem(25);
                width: rem(25);
            }

        }

        svg {
            transition: $transition;
        }
    }

    &__sub-container {
        width: 100%;
        // padding-left: rem(15);
    }
}
</style>
