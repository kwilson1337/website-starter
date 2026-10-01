<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const schema = useConstants()
schema.renderSiteSchema()
</script>
