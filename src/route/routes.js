import { createRouter, createWebHistory } from 'vue-router';

// Importando a nova página
import HoraSaida from '../components/HoraSaida.vue';
import HomePage from '../components/Home.vue'; // Exemplo de outra rota

// Configurando as rotas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Página inicial
  },
  {
    path: '/HoraSaida',
    name: 'HoraSaida',
    component: HoraSaida, // Página recém-criada
  },
];

// Criando o roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
