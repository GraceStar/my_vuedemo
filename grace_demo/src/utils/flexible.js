import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
export const PC_DEVICE_WIDTH = 1280;
export const isMobileTerminal = computed(() => {
  return useWindowSize().width.value < PC_DEVICE_WIDTH;
});
