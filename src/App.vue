<template>
  <div class="app">
    <nav class="menu">
      <router-link class="menu-item" to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Centraliza o menu na página */
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4; /* Cor de fundo */
}

/* Estiliza o menu */
.menu {
  text-align: center; /* Centraliza os itens horizontalmente */
  margin-bottom: 5em;
}

/* Estiliza os links como botões */
.menu-item {
  display: inline-block;
  margin: 10px;
  padding: 15px 25px;
  text-decoration: none;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  font-size: 18px;
  transition: background 0.3s ease;
}

/* Efeito hover */
.menu-item:hover {
  background-color: #0056b3;
}
</style>
