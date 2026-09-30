<template>
    <div class="kw-phone">
        <div class="kw-phone__inner">
            <NuxtLink :to="`tel:${constants.userPhoneNumbers()}`">
                <MdiIcon icon="mdiPhoneOutline" />
                {{ constants.userPhoneNumbers() }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useConstants } from '@/composables/useConstants'
const constants = useConstants()
</script>