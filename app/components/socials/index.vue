<template>
    <div class="kw-socials">
        <div class="kw-socials__inner">
            <component 
                :is="componentsMap[item]" 
                v-for="item in toInclude" 
                :key="item" 
            />
        </div>
    </div>
</template>

<script setup>
import Facebook from './Facebook.vue'
import Instagram from './Instagram.vue';
import LinkedIn from './LinkedIn.vue';

const props = defineProps({
    toInclude: {
        type: Array,
        default: () => ['facebook', 'instagram', 'linkedin']
    }
})

const componentsMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn
}
</script>

<style lang="scss" scoped>
.kw-socials {

    &__inner {
        display: flex;        
        gap: rem(15);

        &:deep(a) {            
            align-items: center;
            display: flex;
            gap: rem(5);
            font-size: rem(24);
        }
    }
}
</style>