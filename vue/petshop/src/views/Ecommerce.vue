<template>
  <div>
    <div>
      <Carrinho
        :produtos="carrinho"
        @remove-carrinho="removerDoCarrinho"
      ></Carrinho>
    </div>
    <router-view @add-carrinho="adicionarCarrinho"></router-view>
  </div>
</template>

<script>
import Carrinho from "@/components/Carrinho.vue";

export default {
  components: {
    Carrinho,
  },
  data() {
    return {
      carrinho: [],
    };
  },
  methods: {
    adicionarCarrinho(produto) {
      this.carrinho.push(produto);
    },
    removerDoCarrinho(produto) {
      const index = this.carrinho.findIndex(
        (carr) => carr.nome === produto.nome
      );
      if (index > -1) {
        this.carrinho.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>
