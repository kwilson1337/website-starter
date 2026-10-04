<template>
  <component :is="as" class="kw-card" :class="`--${variant}`">
    <div class="kw-card__inner">
        <div class="kw-card__content">
            <div v-if="$slots.media" class="kw-card__media">
                <slot name="media" />
            </div>

            <div v-if="$slots.header" class="kw-card__header">
                <slot name="header" />
            </div>

            <div class="kw-card__body">
                <slot />
            </div>
        </div>        

        <div v-if="$slots.footer" class="kw-card__footer">
            <slot name="footer" />
        </div>
    </div>
  </component>
</template>

<script setup>
defineProps({
	as: { type: String, default: 'div' },
	variant: {
		type: String,
		default: 'default',
		validator: (v) => ['default', 'outlined', 'flat', 'elevated'].includes(v),
	},
})
</script>

<style lang="scss" scoped>
.kw-card {
    background-color: $white;
    border-radius: $border-radius;    
    display: flex;
    flex-direction: column;
    border: 1px solid $color3;

    &.--elevated {
        @include box-shadow($color3);
        border: none;
    }

    &__inner {
        padding: rem(15);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__header,
    &__body {
        color: $color3;

        p {
            margin: 0px;
        }
    }

    &__body {
        margin-top: rem(10);
    }

    &__footer {
        margin-top: rem(15);
    }
}
</style>