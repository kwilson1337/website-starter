<template>
    <div class="kw-address">
        <div class="kw-address__inner">
            <NuxtLink :to="`${constants.userAddress().link}`" target="_blank">
                <MdiIcon icon="mdiMapMarkerOutline" />
                {{ constants.userAddress().display }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const constants = useConstants()
</script>