<template>
	<div>
		<v-btn @click="irParaProdutos">
			Voltar para a loja
		</v-btn>
		<v-card class="pa-4">
			<img v-bind:src="produto.foto" />
			<div class="content-card">
				{{ produto.nome }}
				<div class="price">
					<span v-bind:class="produto.desconto ? 'desconto' : ''">{{
						produto.preco | grana
					}}</span>
					<span v-if="produto.desconto">{{ produto.desconto | grana }}</span>
				</div>

				<span>{{ produto.descricao }}</span>
				<v-btn color="secondary">
					Comprar
				</v-btn>
			</div>
		</v-card>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			produto: "Desconhecido"
		};
	},
	async created() {
		try {
			this.produto = await this.buscarProdutos();
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
		async buscarProdutos() {
			const { data } = await axios.get(
				`http://localhost:3000/produtos/${this.$route.params.id}`
			);
			return data;
		},
		irParaProdutos() {
			this.$router.push("/ecommerce");
		}
	}
};
</script>

<style></style>
