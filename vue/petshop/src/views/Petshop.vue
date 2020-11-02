<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" sm="12" xs="12">
        <v-card class="pa-4">
          <cadastro-cliente
            @novo-cadastro="encaminharCliente"
          ></cadastro-cliente>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" sm="12" xs="12">
        <v-card class="pa-4 mb-4">
          <Veterinario
            :clientes="clientesVeterinario"
            @atendido="finalizarConsulta"
          ></Veterinario>
        </v-card>
        <v-card class="pa-4">
          <Banho :clientes="clientesBanho" @atendido="finalizarBanho"></Banho>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row>
      <v-col sm="12">
        <v-card class="pa-4">
          <Balanco :clientes="clientesAtendidos"></Balanco>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Recepcao from "@/components/Recepcao.vue";
import Veterinario from "@/components/Veterinario.vue";
import Banho from "@/components/Banho.vue";
import Balanco from "@/components/Balanco.vue";

export default {
  components: {
    "cadastro-cliente": Recepcao,
    Veterinario,
    Banho,
    Balanco
  },
  data() {
    return {
      clientesVeterinario: [],
      clientesBanho: [],
      clientesAtendidos: []
    };
  },
  methods: {
    encaminharCliente(cliente) {
      cliente.servico.tipo === "banho"
        ? this.clientesBanho.push(cliente)
        : this.clientesVeterinario.push(cliente);
    },
    finalizarConsulta(cliente) {
      this.clientesAtendidos.push(cliente);
      this.$delete(
        this.clientesVeterinario,
        this.clientesVeterinario.findIndex(
          clienteAtendido => clienteAtendido.nome === cliente.nome
        ),
        cliente
      );
    },
    finalizarBanho(cliente) {
      this.clientesAtendidos.push(cliente);

      this.clientesBanho = this.clientesBanho.filter(
        clienteAtendido => clienteAtendido.nome !== cliente.nome
      );
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main";
</style>
