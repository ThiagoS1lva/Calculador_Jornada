import { createApp } from 'vue';
import App from './App.vue';
import router from './route/routes'; // Importando o roteador

const app = createApp(App);

app.use(router); // Usando o roteador
app.mount('#app');
