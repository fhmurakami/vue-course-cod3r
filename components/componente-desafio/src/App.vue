<template>
  <v-app>
    <app-menu/>

    <app-toolbar/>

    <app-carousel/>

    <app-footer/>
  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Carousel from './components/widgets/Carousel.vue'
import Footer from './components/template/Footer.vue'
export default {
  components: {
    'app-menu': Menu,
    'app-toolbar': Toolbar,
    'app-carousel': Carousel,
    'app-footer': Footer
  }
}
</script>
