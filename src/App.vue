<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames" :key="name.id">{{ name }}</li>
    </ul>
    
    <hr>

    <app-list></app-list>
  </div>

</template>

<script>
import ListMixin from './listMixin'

export default {
  data() {
    return {
      title: 'Hello i am Vue.js'
    }
  },
  mixins: [ListMixin]
}
</script>

<style>

</style>
