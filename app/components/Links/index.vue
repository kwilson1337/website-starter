<template>
    <NuxtLink
        v-bind="$attrs"
        class="kw-button"
    >
        <slot/>
        <MdiIcon v-if="icon" :icon="icon" />
    </NuxtLink>
</template>

<script setup>
defineProps({
	iconPlacement: {
		type: String,
		default: 'RIGHT',
		validator: (value) => ['LEFT', 'RIGHT'].includes(value)
	},
	icon: {
		type: String,
		default: ''
	}
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_button.scss';
</style>