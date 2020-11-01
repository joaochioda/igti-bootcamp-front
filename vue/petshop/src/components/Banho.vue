<template>
	<div>
		<h3>Fila de Banho</h3>
		<table>
			<tr>
				<th>Nome</th>
				<th>Idade</th>
				<th>Raça</th>
				<th>Tosa?</th>
				<th></th>
			</tr>
			<tr v-for="(cliente, index) in clientes" :key="index">
				<td>{{ cliente.nome }}</td>
				<td>{{ cliente.idade }}</td>
				<td>{{ cliente.raca }}</td>
				<td>{{ cliente.servico.extra | pergunta }}</td>
				<td><button>Finalizar Serviço</button></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	props: ["clientes"],
	filters: {
		pergunta: function (value) {
			if (typeof value == "boolean") { return value;}
			return value ? 'Sim' : 'Não'
		}
	}
};
</script>

<style>
</style>