<template>
  <div>
  <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      snackbar: false,
      text: `Produto adicionado ao carrinho com sucesso!`,
      timeout: 2000,
    };
  },
  methods: {
    adicionarCarrinho(produto) {
      this.carrinho.push(produto);
      this.snackbar = true;
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
