<template>
    <div class="">
        <teleport to="body">
            <!-- 蒙版 -->
            <transition name="fade">
                <div v-if="isOpen" class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0" @click="isOpen = false">
                </div>
            </transition>
            <!-- 内容 -->
            <transition name="popup-down-up">
                <div v-if="isOpen" v-bind="$attrs" class="w-screen bg-white z-50 fixed bottom-0">
                    <slot/>
                </div>
            </transition>
        </teleport>
    </div>
</template>
<script setup lang="js">
import { useScrollLock } from '@vueuse/core'
import { watch } from 'vue'
const props = defineProps({
  modelValue: {
        required: true,
        type: Boolean
    }
});
import { useVModel } from '@vueuse/core';
// const emits = defineEmits(['update:modelValue']);
const isOpen = useVModel(props);

const isLocked = useScrollLock(document.body);
watch(
  isOpen,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
// fade 展示动画
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// popup-down-up 展示动画
.popup-down-up-enter-active {
  transition: all 0.3s;
}

.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>