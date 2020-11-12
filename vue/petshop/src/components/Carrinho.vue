<template>
  <div class="text-right">
   <v-badge
          color="green"
          v-bind:content="produtos.length < 1 ? '0' : produtos.length"
           overlap
        >
        
       
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          large
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-cart
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item v-for="(produto, index) in produtos" :key="index" >
            <v-list-item-avatar>
              <img v-bind:src="produto.foto" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{produto.nome}} ({{
								(produto.desconto ? produto.desconto: produto.preco) | grana
							}})</v-list-item-title>
              
            </v-list-item-content>

         <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="removeCarrinho(produto)"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>

       
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            total 12
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
     </v-badge>
  </div>
</template>

<script>
export default {
  props: ["produtos"],
  data: () => ({
    fav: false,
    menu: false,
    message: false,
    hints: true,
  }),
  methods: {
		 removeCarrinho(produto) {
      this.$emit("remove-carrinho", produto);
    }
  }
};
</script>

<style></style>
