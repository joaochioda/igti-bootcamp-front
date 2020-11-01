<template>
  <div>
    <div class="row">
      <div class="col">
        <cadastro-cliente @novo-cadastro="encaminharCliente"></cadastro-cliente>
      </div>
      <div class="col">
        <Veterinario :clientes="clientesVeterinario"></Veterinario>
        <Banho :clientes="clientesBanho"></Banho>
      </div>
    </div>
    <div class="espaco-abaixo"></div>
    <div class="espaco-abaixo"></div>
    <Balanco></Balanco>
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
      clientesBanho: []
    };
  },
  methods: {
    encaminharCliente(cliente) {
      cliente.servico.tipo === "banho"
        ? this.clientesBanho.push(cliente)
        : this.clientesVeterinario.push(cliente);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main";
</style>
