<template>
	<div>
		<h3>Fila de consultas</h3>
		<table>
			<tr>
				<th>Nome</th>
				<th>Idade</th>
				<th>Raça</th>
				<th>Sintomas</th>
				<th></th>
			</tr>
			<tr v-for="(cliente, index) in clientes" :key="index">
				<td>{{ cliente.nome }}</td>
				<td>{{ cliente.idade }}</td>
				<td>{{ cliente.raca }}</td>
				<td>{{ cliente.servico.observacoes }}</td>
				<td><button>Finalizar Serviço</button></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	props: ["clientes"]
};
</script>

<style>
</style>