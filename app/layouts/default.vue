<template>
    <Navigation />
    <div class="kw-layout-default">
        <slot/>
    </div>
    <Footer />
</template>

<script setup>
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
</script>