<template>
    <div class="kw-socials --linkedin">
        <div class="kw-socials__inner">
            <NuxtLink :to="`${constants.useSocials().linkedin}`" target="_blank">
                <MdiIcon icon="mdiLinkedin" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const constants = useConstants()
</script>