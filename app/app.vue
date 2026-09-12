<template>
  <section class="cards">
    <Card v-for="num in 5" :key="num" />
  </section>
</template>

<script setup>
import Card from '@/components/cards'
</script>

<style lang="scss">
.cards {    
  @include auto-grid(200px, 15px);
}
</style>