<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/cars'">Cars</router-link> <!-- bind ссылок. Для этого нужно поместить значение ссылки в одинарные кавычки '' -->
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>

