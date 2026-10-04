<template>
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
      <Card v-for="num in 5" :key="num">
        <template #header>
          Card
        </template>

        This is some description.

        <template #footer>
          <Link to="/" class="--button2">Home</Link>
        </template>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import Card from '@/components/cards'
import Banner from '@/components/banner'
import Section from '@/components/section'
import Link from '@/components/Links'

useHead({
	title: 'My home page',
	meta: [
		{ name: 'description', content: 'My amazing site.' },
	],
})
</script>

<style lang="scss">
.cards {
  @include auto-grid(250px, 15px);
}
</style>