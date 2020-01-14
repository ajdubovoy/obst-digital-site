import Vue from 'vue';
import Footer from "./Footer";


const components = {
  Footer
}

export default function() {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
}
