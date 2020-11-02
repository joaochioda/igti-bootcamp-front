<template>
  <div>
    <h2>Lista Produtos</h2>
    <div v-for="(produto, index) in produtos" :key="index">
    <router-link :to="`/ecommerce/${produto}`">{{ produto }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: ["racao", "remedio", "brinqueo"]
    };
  }
};
</script>

<style></style>
