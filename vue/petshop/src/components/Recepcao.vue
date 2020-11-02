<template>
  <div>
    <v-form>
      <h1>Bem vindo ao Petshop</h1>
      <v-spacer></v-spacer>
      <v-text-field
        label="Nome do cliente"
        v-model="cliente.nome"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select
        label="Raça do cachorro"
        v-model="cliente.raca"
        :items="racas"
        item-text="nome"
      ></v-select>
      <v-spacer></v-spacer>
      <v-text-field
        label="Idade"
        type="number"
        v-model="cliente.idade"
        :rules="[rules.idadeCanina]"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select label="Serviço" v-model="cliente.servico" :items="servicos">
        <template v-slot:selection="data">
          {{ data.item.nome }}
        </template>
        <template v-slot:item="data">
          {{ data.item.nome }} {{ data.item.preco | grana }}
        </template>
      </v-select>
      <v-spacer></v-spacer>
      <v-textarea
        v-if="cliente.servico && cliente.servico.tipo === 'consulta'"
        label="Sintomas"
        v-model="cliente.servico.observacoes"
        rows="3"
      ></v-textarea>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        @click="cadastrarCliente"
        v-bind:disabled="
          cliente.idade >= 30 ||
            cliente.nome.length === 0 ||
            cliente.raca.length === 0 ||
            cliente.idade === 0 ||
            cliente.servico.tipo.length === 0
        "
        >Cadastrar cliente</v-btn
      >
    </v-form>
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
      servicos: [],
      rules: {
        idadeCanina: value => value < 30 || "Tem certeza que é um cachorro ?"
      }
    };
  },
  async created() {
    try {
      this.racas = await this.buscarRacas();
      this.servicos = await this.buscarServicos();
    } catch (e) {
      console.log(e);
    }
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
