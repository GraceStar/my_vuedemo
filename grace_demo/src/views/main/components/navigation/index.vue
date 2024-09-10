<template>
  <mobile-navigation v-if="isMobileTerminal" :data="categoryData">首页navigation</mobile-navigation>
</template>

<script setup>
import mobileNavigation from './mobile/index.vue';
import { isMobileTerminal } from "@/utils/flexible";
import { getCategory } from '@/api/category';
import { ref } from 'vue';

const categoryData = ref([]);

const getCategoryData = async() => {
  const {categorys} = await getCategory();
  console.log(categorys);
  categoryData.value = categorys;
};

getCategoryData();
</script>
