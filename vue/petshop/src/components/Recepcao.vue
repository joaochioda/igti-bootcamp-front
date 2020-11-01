<template>
	<div>
		<h2>Bem vindo ao Petshop</h2>
		<form>
			<div>
				<label class="espaco-lado">Nome do cliente:</label>
				<input type="text" />
			</div>
			<div class="espaco-abaixo"></div>
			<div>
				<label class="espaco-lado">Raça do PET</label>
				<select>
					<option v-for="(raca, index) in racas" :key="index">
						{{ raca.nome }}
					</option>
				</select>
			</div>
			<div class="espaco-abaixo"></div>
			<div>
				<label class="espaco-lado">Idade:</label>
				<input type="number" />
			</div>
			<div class="espaco-abaixo"></div>
			<div>
				<label class="espaco-lado">Seviço</label>
				<select>
					<option v-for="(servico,index) in servicos" :key="index">
						{{servico.nome}} {{servico.preco | grana}}
					</option>
				</select>
			</div>
			<div class="espaco-abaixo"></div>
			<div>
				<button>Cadastrar cliente</button>
			</div>
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
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
	}
};
</script>

<style lang="scss" scoped>

</style>
