<template>
    <div class="kw-phone">
        <div class="kw-phone__inner">
            <NuxtLink :to="`mailto:${constants.userEmailAddress()}`">
                <MdiIcon icon="mdiEmailOutline" />
                {{ constants.userEmailAddress() }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const constants = useConstants()
</script>