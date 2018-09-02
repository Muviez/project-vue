<template>
  <div>
    <h2>{{ title }}</h2>

  <input type="text" v-model="searchName">
  <ul>
    <li v-for="name of filteredNames" :key="name.id">{{ name }}</li>
  </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: 'Hello i am Vue.js',
      searchName: '',
      names: ['Vlad', 'Egor', 'Kirill', 'Oleg', 'Anton']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
  filters: {

  }
}
</script>

<style>

</style>
