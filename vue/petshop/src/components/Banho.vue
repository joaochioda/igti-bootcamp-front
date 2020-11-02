<template>
  <div>
    <h3>Fila de Banho</h3>
    <v-simple-table v-if="clientes.length > 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Tosa?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(cliente, index) in clientes"
          :key="index"
          v-bind:class="cliente.servico.finalizado ? 'atendido' : ''"
        >
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.idade }}</td>
          <td>{{ cliente.raca }}</td>
          <td>{{ cliente.servico.extra | pergunta }}</td>
          <td>
            <v-btn @click="finalizarAtendimento(cliente)">
              Finalizar Serviço
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <div v-else>
      Nenhum cliente aguardando
    </div>
  </div>
</template>

<script>
import Servico from "@/components/Servicos";
export default {
  props: ["clientes"],
  extends: Servico,
  filters: {
    pergunta: function(value) {
      if (value === undefined) {
        return "Não";
      }
      if (typeof value !== "boolean") {
        return value;
      }
      return value ? "Sim" : "Não";
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.atendido {
  font-weight: bold;
  color: green;
}
</style>
