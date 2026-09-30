<template>
    <div class="kw-socials --instagram">
        <div class="kw-socials__inner">
            <NuxtLink :to="`${constants.useSocials().instagram}`" target="_blank">
                <MdiIcon icon="mdiInstagram" />                
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const constants = useConstants()
</script>