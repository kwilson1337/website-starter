<template>
    <NuxtLayout class="kw-error-page">
        <Section>
            <div class="kw-error-page__inner">
                <div class="kw-error-page__title">
                    <h1>404</h1>
                    <h2>Looks like you've wandered off the trail.</h2>
                </div>

                <div class="kw-error-page__actions">
                    <Button 
                        class="--button4" 
                        to="/" 
                        icon="mdiArrowRightBold"
                    >
                        Home
                    </Button>                    
                </div>
            </div>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import Section from '@/components/section'
import Button from '@/components/links'
</script>

<style lang="scss" scoped>
.kw-error-page {
    &__title {
        color: $color3;
        text-align: center;

        h1 {
            @include rfs(36, 250);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &:deep(.loading-animation) {
            width: rem(180);
            margin-bottom: rem(-40);
        }
    }

    &__actions {
        margin-top: rem(15);
        text-align: center;

        a.kw-button {
            @include rfs(18, 24);
        }
    }
}
</style>