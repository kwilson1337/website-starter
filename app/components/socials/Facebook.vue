<template>
    <div class="kw-socials --facebook">
        <div class="kw-socials__inner">
            <NuxtLink :to="`${constants.useSocials().facebook}`" target="_blank">
                <MdiIcon icon="mdiFacebook" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const constants = useConstants()
</script>