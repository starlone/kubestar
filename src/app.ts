import * as vue from 'vue';
import home from './frontend/components/home/home.component';


export default vue.createApp({
  template: "<home />",
  components: {
    "home": home
  }
});
