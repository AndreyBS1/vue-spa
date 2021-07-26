<template>
  <div class="greeting">
    <h2>
      Wellcome to the Vue.js blog
    </h2>
  </div>
</template>

<script>
export default {
  name: "Hello"
}
</script>

<style scoped>
.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
</style>