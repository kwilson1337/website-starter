<template>
    <div class="kw-copy-write-bar">
        <Container>
            <div class="kw-copy-write-bar__inner">
                <div class="kw-copy-write-bar__col --left">
                    &#169; {{ currentYear }}
                </div>
                <div class="kw-copy-write-bar__col --right">
                    Made with <MdiIcon icon="mdiHeart" /> by <NuxtLink target="_blank" to="https://deeplydesigns.io/">DeeplyDesigns</NuxtLink>
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup>
import Container from '@/components/section/container'
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.kw-copy-write-bar {
    background-color: #333;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: rem(10) 0px;
    }

    svg {
        color: red;
    }

    a {
        color: $white;
    }
}
</style>