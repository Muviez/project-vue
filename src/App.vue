<template>
  <div>
    <h2>From inputs</h2>
    
    <app-onoff v-model="switched"></app-onoff>

    <div>
      <h3 v-if="switched">Command is enabled</h3>
      <h3 v-else>Command is disbled</h3>
    </div>
  </div>

</template>

<script>
import Onoff from './OnOff.vue'

export default {
  data() {
    return {
      switched: false
    }
  },
  components: {
    appOnoff: Onoff
  }
}
</script>

<style scoped>

</style>

