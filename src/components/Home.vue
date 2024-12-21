<template>
    <div class="menu">
      <router-link class="menu-item" to="/HoraSaida">Calculador de horário de saída</router-link>
    </div>
  </template>
  
  <style>
  /* Estilos para centralizar o menu na página */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4; /* Cor de fundo suave */
  }
  
  .menu {
    text-align: center; /* Centraliza os itens horizontalmente */
  }
  
  .menu-item {
    display: block; /* Coloca os links em colunas (um embaixo do outro) */
    margin: 10px 0; /* Espaço entre os itens */
    padding: 15px 25px; /* Tamanho do botão */
    text-decoration: none; /* Remove o sublinhado dos links */
    color: white; /* Cor do texto */
    background-color: #007bff; /* Cor de fundo dos botões */
    border-radius: 5px; /* Bordas arredondadas */
    font-size: 18px; /* Tamanho da fonte */
    transition: background 0.3s ease; /* Efeito suave ao passar o mouse */
  }
  
  .menu-item:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
  </style>
  