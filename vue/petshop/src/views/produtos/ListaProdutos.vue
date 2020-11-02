<template>
	<div>
		<h2>Lista Produtos</h2>
		<v-row>
			<v-col
				cols="12"
				md="4"
				sm="6"
				xs="12"
				v-for="(produto, index) in produtos"
				:key="index"
				class="row"
			>
				<v-card class="pa-4">
						<router-link :to="`/ecommerce/${produto.id}`">
					<img v-bind:src="produto.foto" />
            </router-link>
					<div class="content-card">
            {{produto.nome}}
						<div class="price">
							<span v-bind:class="produto.desconto ? 'desconto' : ''">{{
								produto.preco | grana
							}}</span>
							<span v-if="produto.desconto">{{
								produto.desconto | grana
							}}</span>
						</div>

						<span class="description">{{ produto.descricao }}</span>
						<v-btn color="secondary">
							Comprar
						</v-btn>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			produtos: []
		};
	},
	async created() {
		try {
			this.produtos = await this.buscarProdutos();
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
		async buscarProdutos() {
			const { data } = await axios.get("http://localhost:3000/produtos");
			return data;
		}
	}
};
</script>

<style lang="scss">
img {
	width: 100%;
}

a {
	color: black !important;
	text-decoration: none;
}

.description {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.content-card {
	display: flex;
	flex-direction: column;
}

.price {
	display: flex;
	justify-content: flex-end;
}

.price span {
	margin-right: 10px;
}

.desconto {
	text-decoration: line-through;
}
</style>
