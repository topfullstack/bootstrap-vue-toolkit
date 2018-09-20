import "./assets/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import * as components from './components'

export default {
  install(Vue){
    for(let name in components) {
      Vue.component('B' + name, components[name])
    }
  }
}