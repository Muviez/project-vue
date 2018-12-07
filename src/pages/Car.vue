<template>
    <div>
        <h1>Car id {{ id }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$router.currentRoute.params['id'] // this.$route.params['id'] тоже самое что и this.$router.currentRoute.params['id']
        }
    },
    watch: {
        $route (toR, fromR) {
            this.id = toR.params['id']
        }
    }
}
</script>

<style scoped>

</style>
