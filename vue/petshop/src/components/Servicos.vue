<script>
export default {
  methods: {
    finalizarAtendimento(cliente) {
      this.$emit("atendido", cliente);
      //ou
      //this.$set(this.clientes, 0, cliente);
    }
  }
};
</script>
