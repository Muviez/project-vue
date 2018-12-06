<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email"
          id="email"
          class="form-contorl"
          @blur="$v.email.$touch()"
          v-model="email"
        >

        <pre>
          {{$v.email}}
        </pre>
      </div>
    </form>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {

    data() {
      return {
        email: ''
      }
    },
    validations: {
      email: {
        required,
        email
      }
    }
  }
</script>

<style scoped>

</style>

