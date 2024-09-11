<template>
    <svg aria-hidden="true">
        <use :class="fillClass" :xlink:href="symbolId" :fill="color"/>
    </svg>    
</template>
<script setup lang="js">
import { computed } from 'vue'
const props = defineProps({
    name:{
        type: String,
        required: true
    },
    color:{
        type: String
    },
    fillClass:{
        type:String
    }
});

const symbolId = computed(() => `#icon-${props.name}`);
</script>