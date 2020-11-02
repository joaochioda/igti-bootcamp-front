import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Petshop from "@/views/Petshop.vue";
import Ecommerce from "@/views/Ecommerce.vue";
import Admin from "@/views/Admin.vue";

import ListaProdutos from "@/views/produtos/ListaProdutos.vue";
import DetalheProduto from "@/views/produtos/DetalheProduto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/petshop",
    name: "Petshop",
    component: Petshop
  },
  {
    path: "/ecommerce",
    name: "Ecommerce",
    component: Ecommerce,
    children: [
      { path: "", name: "ListaProdutos", component: ListaProdutos },
      { path: ":id", name: "DetalheProduto", component: DetalheProduto }
    ]
  },
  {
    path: "/admin",
    name: "Rota protegida",
    component: Admin,
    meta: {
      protegida: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log("verificando se a rota é protegida");
  if (to.meta.protegida) {
    console.log("acessando pagina protegida");
    router.push("/");
  }
  next();
});

export default router;
