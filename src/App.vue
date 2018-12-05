<template>
  <div>
    <h2>From inputs</h2>
    
    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="social"> VK
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <hr>

    <ul>
      <li v-for="s in social" :key="s.id">{{s}}</li>
    </ul>

  </div>

</template>

<script>

export default {
  data() {
    return {
      social: []
    }
  }
}
</script>

<style scoped>

</style>

