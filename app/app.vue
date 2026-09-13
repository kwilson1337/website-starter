<template>
  <Navigation />
  <Banner>
    <template #title>
      <h1>This is a title</h1>
      <h2>This is some other stuff</h2>
    </template>

    <template #button>
      <NuxtLink to="/" class="kw-button --button4">This is a test</NuxtLink>
    </template>
  </Banner>

  <Section>
    <div class="cards">
      <Card v-for="num in 5" :key="num" />
    </div>
  </Section>
</template>

<script setup>
import Card from '@/components/cards'
import Banner from '@/components/banner'
import Section from '@/components/section'
import Navigation from '@/components/navigation'
</script>

<style lang="scss">
.cards {
  @include auto-grid(250px, 15px);
}
</style>