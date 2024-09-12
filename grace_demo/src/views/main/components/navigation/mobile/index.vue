<template>
  <div class="bg-red dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden bg-red"
      ref="ulTarget"
    >
      <!-- 汉堡按钮 -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
        :style="sliderStyle"
      ></li>
      <!-- category item -->
      <li
        v-for="(item, index) in data"
        :key="item.id"
        :ref="setItemRef"
        @click="onItemClick(index)"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4 bg-red"
        :class="{
          'text-zinc-100 ': currentCategoryIndex === index,
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, watch, onBeforeUpdate } from "vue";
import { useScroll } from "@vueuse/core";

defineProps({
  data: {
    type: Array,
    required: true,
  },
});
// 滑块
const sliderStyle = ref({
  transform: "translateX(0px)",
  width: "60px",
});
const currentCategoryIndex = ref(0);
let itemRefs = [];
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el);
  }
};

watch(currentCategoryIndex, (index) => {
  const target = itemRefs[index];
  if (target) {
    const { left, width } = target.getBoundingClientRect();
    sliderStyle.value = {
      transform: `translateX(${ulScrollLeft.value + left - 10 + "px"})`,
      width: `${width}px`,
    };
  }
});

const onItemClick = (index) => {
  currentCategoryIndex.value = index;
};

const ulTarget = ref(null);
const { x: ulScrollLeft } = useScroll(ulTarget);

onBeforeUpdate(() => {
  itemRefs = [];
});
</script>
