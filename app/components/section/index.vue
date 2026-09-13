<template>
    <section class="kw-section">
        <Container :is-fluid="isFluid">
            <slot/>
        </Container>
    </section>
</template>

<script setup>
import Container from './container'

defineProps({
	isFluid: {
		type: Boolean,
		default: false
	}
})
</script>