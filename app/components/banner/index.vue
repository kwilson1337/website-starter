<template>
    <Section class="kw-banner">
        <div class="kw-banner__inner">
            <div class="kw-banner__content">
                <div class="kw-banner__title">
                    <slot name="title"/>
                </div>

                <div class="kw-banner__button">
                    <slot name="button"/>
                </div>
            </div>
        </div>
    </Section>
</template>

<script setup>
import Section from '@/components/section'
</script>

<style lang="scss" scoped>
    .kw-banner {
        background-position: center;
        min-height: 75vh;
        background-color: $color3;
        display: flex;
        align-items: center;
        justify-content: center;

        &__title {
            color: $white;
            text-align: center;
        }

        &__button {
            text-align: center;
        }
    }
</style>