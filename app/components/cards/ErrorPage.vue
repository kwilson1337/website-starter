<template>
  <Card variant="elevated" class="error-page">
    <template #media>
      <div class="error-page__icon">
        <MdiIcon :icon="card.icon" />
      </div>
    </template>
    <template #header>
      <h3>{{ card.title }}</h3>
    </template>

    <p>{{ card.description }}</p>

    <template #footer>
      <slot name="actions">
        <div class="error-page__actions">
          <Link :to="card.link.url" class="--button2">{{ card.link.title }}</Link>
        </div>
      </slot>
    </template>
  </Card>
</template>

<script setup>
import Link from '@/components/Links'
import Card from './index.vue'

defineProps({
	card: { type: Object, required: true },
})
</script>

<style lang="scss" scoped>
.error-page {
  &__icon {
    width: rem(45);
    height: rem(45);
    border-radius: 50%;
    background-color: $color2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: rem(15);

    svg {
      color: $color3;
      font-size: rem(24);
    }
  }

  &__actions {
    :deep(a) {
      display: block;
      text-align: center;
    }
  }
}
</style>