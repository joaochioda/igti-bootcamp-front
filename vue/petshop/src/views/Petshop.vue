<template>
  <div>
    <div class="row">
      <div class="col">
        <cadastro-cliente @novo-cadastro="encaminharCliente"></cadastro-cliente>
      </div>
      <div class="col">
        <Veterinario
          :clientes="clientesVeterinario"
          @atendido="finalizarConsulta"
        ></Veterinario>
        <Banho :clientes="clientesBanho" @atendido="finalizarBanho"></Banho>
      </div>
    </div>
    <div class="espaco-abaixo"></div>
    <div class="espaco-abaixo"></div>
    <Balanco :clientes="clientesAtendidos"></Balanco>
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
