<template>
  <div>
    <h2>{{ produto }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produto: "Desconhecido"
    };
  },
  mounted() {
    this.produto = this.$route.params.id;
  }
};
</script>

<style></style>
