<template>
    <div class="kw-contact-info">
        <div class="kw-contact-info__inner">
            <component
                :is="componentsMap[item]"
                v-for="item in toInclude"
                :key="item"
            />
        </div>
    </div>
</template>

<script setup>
import Phone from './Phone.vue'
import Address from './Address.vue';
import Email from './Email.vue';

defineProps({
	toInclude: {
		type: Array,
		default: () => ['phone', 'address', 'email']
	}
})

const componentsMap = {
	phone: Phone,
	address: Address,
	email: Email
}
</script>

<style lang="scss" scoped>
.kw-contact-info {

    &__inner {
        display: flex;
        flex-direction: column;
        gap: rem(15);

        &:deep(a) {
            align-items: center;
            display: inline-flex;
            gap: rem(5);
        }
    }
}
</style>