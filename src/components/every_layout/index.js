import Vue from 'vue';
import Box from "./Box";
import Cluster from "./Cluster";
import Cover from "./Cover";
import Grid from "./Grid";
import Sidebar from "./Sidebar";
import Stack from "./Stack";
import Switcher from "./Switcher";

const components = {
  Box,
  Cluster,
  Cover,
  Grid,
  Sidebar,
  Stack,
  Switcher
}

export default function() {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
}
