// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { upperFirst, kebabCase } from 'lodash';
import registerLayoutComponents from './components/every_layout';

import DefaultLayout from '~/layouts/Default.vue'
import layoutComponents from '~/components/every_layout';
import Cover from '~/components/every_layout/Cover';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('layout', DefaultLayout);

  registerLayoutComponents();
}
