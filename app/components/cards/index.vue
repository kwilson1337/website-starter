<template>
    <div class="kw-card">
        <div class="kw-card__inner">
            <div class="kw-card__img"/>
            <div class="kw-card__content">
                <div class="kw-card__title"><p class="h3">Card title</p></div>
                <div class="kw-card__desc"><p>Card description</p></div>
                <div class="kw-card__button">
                    <NuxtLink to="/" class="kw-button --button2">Card</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.kw-card {
    background-color: $white;
    border-radius: $border-radius;

    &__inner {
        padding: rem(15);
    }

    &__title,
    &__desc {
        color: $color3;

        p {
            margin: 0px;
        }
    }

    &__desc {
        margin-top: rem(10);
    }

    &__button {
        margin-top: rem(15);
    }
}
</style>