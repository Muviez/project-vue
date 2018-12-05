<template>
  <div>
    <h2>From inputs</h2>
    <input type="text" v-model="name">

    <p>{{name}}</p>
  </div>

</template>

<script>

export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>

</style>

