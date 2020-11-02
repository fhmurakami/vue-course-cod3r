<template>
  <v-app>
    <app-menu/>

    <app-toolbar/>

    <app-carousel/>

    <app-footer/>
  </v-app>
</template>

<script>
import Menu from './Menu.vue'
import Toolbar from './Toolbar.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'
export default {
  components: {
    'app-menu': Menu,
    'app-toolbar': Toolbar,
    'app-carousel': Carousel,
    'app-footer': Footer
  }
}
</script>
