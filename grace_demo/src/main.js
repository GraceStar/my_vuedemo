import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import './styles/index.scss';
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'
// 设置 rem
useREM()
createApp(App).use(mLibs).use(router).mount("#app");
