<template>
  <mobile-navigation v-if="isMobileTerminal">首页navigation</mobile-navigation>
</template>

<script setup>
import mobileNavigation from './mobile/index.vue';
import { isMobileTerminal } from "@/utils/flexible";
import { getCategory } from '@/api/category';

const getCategoryData = async() => {
  const res = await getCategory();
  console.log(res);
};

getCategoryData();
</script>
