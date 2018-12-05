<template>
  <div>
    <h2>From inputs</h2>
    
    <select v-model="social">
      <option 
        v-for="s in socialList"
        :key="s.id"
        
      >{{s}}</option>
    </select>

    <hr>

    <p>{{social}}</p>

  </div>

</template>

<script>

export default {
  data() {
    return {
      social: 'vk',
      socialList: ['vk', 'facebook', 'instagram']
    }
  }
}
</script>

<style scoped>

</style>

