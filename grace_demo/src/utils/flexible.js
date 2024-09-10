import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

export const PC_DEVICE_WIDTH = 1280;
export const isMobileTerminal = computed(() => {
  return useWindowSize().width.value < PC_DEVICE_WIDTH;
});

export const useREM = () => {
  const MAX_FONT_SIZE = 40;
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector();
    let fontSize = window.innerWidth/10;
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE: fontSize;
    html.style.fontSize = fontSize + 'px';
  });
}
