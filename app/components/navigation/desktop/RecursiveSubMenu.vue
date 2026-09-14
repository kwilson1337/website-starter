<template>
    <div class="recusive-sub-menu" :class="{ '--is-last': isLastOfType }">
        <div class="recusive-sub-menu__inner">
            <div
                v-for="link in menuItems"
                :key="link.title"
                class="recusive-sub-menu__sub-link"
            >
                <NuxtLink :to="link.url">
                    {{ link.title }}
                    <MdiIcon v-if="link.subLinks" icon="mdiChevronDown" />
                </NuxtLink>

                <template v-if="link.subLinks">
                    <RecursiveSubMenu :menu-items="link.subLinks" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
	menuItems: {
		type: Array,
		default: () => []
	},
	isLastOfType: {
		type: Boolean,
		default: false
	}
})
</script>

<style lang="scss">
.recusive-sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: rem(100);
    visibility: hidden;
    opacity: 0;
    transition: $transition;
    border-radius: $border-radius;
    z-index: 100;

    a {
        background-color: $color1;
        color: $color3;
        transition: $transition;
        text-decoration: none;
        font-size: rem(18);
        padding: rem(8) rem(16);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &:hover {
            background-color: $color3;
            color: $color1;
        }
    }

    &__inner {
        border-radius: $border-radius;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &__sub-link {
        position: relative;
        display: block;

        svg {
            transition: $transition;
            margin-left: rem(5);
        }

        > .recusive-sub-menu {
            top: 0;
            left: 100%;
            margin-left: 0;
            background-color: darken($color1, 5%);

            .--is-last & {
                left: unset;
                right: 130%;
            }
        }

    &:hover {
        > a svg {
            transform: rotate(-90deg);
        }

        > .recusive-sub-menu {
            opacity: 1;
            visibility: visible;
        }
    }
    }
}
</style>