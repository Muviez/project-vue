<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-counter></app-counter>

    <app-car 
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi" 
      @nameChanged="carName = $event"
      @updateCounter="counter = $event"
    ></app-car>
  </div>

</template>

<script>
export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  }
}
</script>

<style>

</style>
