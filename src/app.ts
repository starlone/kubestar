import * as vue from 'vue';
import { home } from './home/home'


export const app = vue.createApp({
  template: "<home />",
  components: {
    "home" : home
  }  
});


