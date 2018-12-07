<template>
    <div>
        <h4>Car name: {{ $route.query.name }}</h4>
        <h5>Car year: {{ $route.query.year }}</h5>

        <div class="scroll"></div>
        <h6 id="scroll">Hello from the button</h6>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .scroll {
        width: 100px;
        height: 1000px;
        background: #000;
    }
</style>
