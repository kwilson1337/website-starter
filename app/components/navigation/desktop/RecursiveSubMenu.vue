<template>
    <div class="recusive-sub-menu">
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
	}
})
</script>

<style lang="scss">
.recusive-sub-menu {
    position: absolute;
    top: 100%;
    width: 100%;
    min-width: rem(250);
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
        transition: $transition;
        display: flex;
        align-items: center;
        width: 100%;

        &:hover {
            background-color: $color3;
            color: $color1;
        }
    }

    &__inner {
        overflow: hidden;
        border-radius: $border-radius;
    }

    &__sub-link {
        display: flex;
        align-items: center;

        svg {
            transition: $transition;
            margin-left: rem(5);
        }

        > .recusive-sub-menu {
            margin-left: rem(15);
            top: 100%;
            background-color: darken($color1, 5%);
        }

        &:hover {
            > a svg {
                transform: rotate(180deg);
            }

            > .recusive-sub-menu {
                opacity: 1;
                visibility: visible;
            }
        }
    }
}
</style>