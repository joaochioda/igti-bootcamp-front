<template>
  <div>
    <h2>Bem vindo ao Petshop</h2>
    <form @submit.prevent="cadastrarCliente">
      <div>
        <label class="espaco-lado">Nome do cliente:</label>
        <input type="text" v-model="cliente.nome" />
      </div>
      <div class="espaco-abaixo"></div>
      <div>
        <label class="espaco-lado">Raça do PET</label>
        <select v-model="cliente.raca">
          <option v-for="(raca, index) in racas" :key="index">
            {{ raca.nome }}
          </option>
        </select>
      </div>
      <div class="espaco-abaixo"></div>
      <div>
        <label class="espaco-lado">Idade:</label>
        <input type="number" v-model="cliente.idade" />
        <div class="erro" v-if="cliente.idade > 30">
          Tem certeza que é um cachorro ?
        </div>
      </div>

      <div class="espaco-abaixo"></div>
      <div>
        <label class="espaco-lado">Seviço</label>
        <select v-model="cliente.servico">
          <option
            v-for="(servico, index) in servicos"
            :key="index"
            :value="servico"
          >
            {{ servico.nome }} {{ servico.preco | grana }}
          </option>
        </select>
      </div>
      <div class="espaco-abaixo"></div>
      <div v-if="cliente.servico.tipo === 'consulta'">
        <label>Sintomas: </label>
        <textarea rows="3" v-model="cliente.servico.observacoes"></textarea>
      </div>
      <div>
        <button
          type="submit"
          v-bind:disabled="
            cliente.idade >= 30 ||
              cliente.nome.length === 0 ||
              cliente.raca.length === 0 ||
              cliente.idade === 0 ||
              cliente.servico.tipo.length === 0
          "
        >
          Cadastrar cliente
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Cachorro from "@/models/cachorro";
export default {
  data() {
    return {
      cliente: new Cachorro(),
      racas: [],
      servicos: []
    };
  },
  async created() {
    this.racas = await this.buscarRacas();
    this.servicos = await this.buscarServicos();
  },
  methods: {
    async buscarRacas() {
      const { data } = await axios.get("http://localhost:3000/racas");
      return data;
    },
    async buscarServicos() {
      const { data } = await axios.get("http://localhost:3000/servicos");
      return data;
    },
    cadastrarCliente() {
      this.$emit("novo-cadastro", this.cliente);
      this.cliente = new Cachorro();
    }
  }
};
</script>

<style lang="scss" scoped>
.erro {
  color: red;
}
</style>
