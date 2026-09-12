<template>
    <div class="container" :class="{ '--fluid' : isFluid }">
        <slot />
    </div>
</template>

<script setup>
defineProps({
    isFluid: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scope>
.container {
    padding: 0px 15px;
    margin: 0 auto;
    max-width: 1320px;

    @media (max-width: 1200px) {
        max-width: 1140px;
    }

    @media (max-width: 992px) {
        max-width: 960px;
    }

    @media (max-width: 768px) {
        max-width: 1140px;
    }

    @media (max-width: 576px) {
        max-width: 540px;
    }

    &.--fluid {
        max-width: 100% !important;        
    }
}
</style>