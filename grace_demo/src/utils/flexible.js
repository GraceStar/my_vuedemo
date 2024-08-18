import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
export const PC_DEVICE_WIDTH = 1280;
export const isMobileTerminal = computed(() => {
  return useWindowSize().width.value < PC_DEVICE_WIDTH;
});

export const useREM = () => {
  const MAX_FONT_SIZE = 40;
  document.addEventListener("DOMContentLoaded", () => {
    const html = document.querySelector("html");
    const htmlWidth = document.documentElement.clientWidth;
    const fontSize = htmlWidth / 10;
    html.style.fontSize =
      fontSize > MAX_FONT_SIZE ? `${MAX_FONT_SIZE}px` : `${fontSize}px`;
  });
};
