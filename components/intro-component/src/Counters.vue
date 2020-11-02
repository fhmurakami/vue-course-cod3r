<template>
  <div class="counters">
    <h1>Contadores</h1>
    <app-counter v-for="c in 5" :key="c"/>
    <button>Test</button>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  components: {
    'app-counter': Counter
  }
}
</script>

<style>

</style>