<template>
    <div id="app">
      <h1>Cálculo de Horário de Saída</h1>
      <form @submit.prevent="calcularHorarioSaida">
        <div>
          <label for="horasTrabalhadas">Horas trabalhadas (HH:MM):</label>
          <input
            type="time"
            id="horasTrabalhadas"
            v-model="horasTrabalhadas" 
            required
          />
        </div>
  
        <div>
          <label for="horaChegada">Hora de chegada:</label>
          <input
            type="time"
            id="horaChegada"
            v-model="horaChegada"
            required
          />
        </div>
  
        <div>
          <label for="horasExtras">Horas extras (HH:MM):</label>
          <input type="time" id="horasExtras" v-model="horasExtras" />
        </div>
        
        <div>
          <label for="horaAlmoço">Hora de almoço</label>
          <select class="horaAlmoço" id="horaAlmoço" v-model="horaAlmoço">
            <option value="01:00">01:00</option>
            <option value="00:30">00:30</option>
          </select>
        </div>

        <button type="submit">Calcular</button>
      </form>
  
      <div class="horasaida" v-if="horaSaida">
        <h2>Horário de Saída</h2>
        <p>{{ horaSaida }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        horasTrabalhadas: "08:48",
        horaAlmoço: "01:00",
        horaChegada: "",
        horasExtras: "",
        horaSaida: null,
      };
    },
    methods: {
      calcularHorarioSaida() {
        // Converter tempos em minutos
        const [horasTrabalhadasHoras, horasTrabalhadasMinutos] =
          this.horasTrabalhadas.split(":").map(Number);
        const [horaChegadaHoras, horaChegadaMinutos] =
          this.horaChegada.split(":").map(Number);
        const [horasExtrasHoras, horasExtrasMinutos] = this.horasExtras
          ? this.horasExtras.split(":").map(Number)
          : [0, 0];
        //Converter hora do almoço em minutos
        const [horaAlmoçoHoras, horaAlmoçoMinutos] =
          this.horaAlmoço.split(":").map(Number);
  
        // Soma total de minutos trabalhados
        const minutosTotais =
          (horasTrabalhadasHoras + horaAlmoçoHoras + horasExtrasHoras) * 60 + // +1 por 1h de almoço
          horasTrabalhadasMinutos +
          horasExtrasMinutos + horaAlmoçoMinutos;
  
        // Hora de chegada em minutos
        const minutosChegada =
          horaChegadaHoras * 60 + horaChegadaMinutos;
  
        // Hora de saída calculada em minutos
        const minutosSaida = minutosChegada + minutosTotais;
  
        // Converter minutos de volta para horas e minutos
        const horasSaida = Math.floor(minutosSaida / 60) % 24;
        const minutosSaidaFinal = minutosSaida % 60;
  
        // Formatar saída
        this.horaSaida = `${horasSaida.toString().padStart(2, "0")}:${minutosSaidaFinal
          .toString()
          .padStart(2, "0")}`;
      },
    },
  };
  </script>
  
  <style>
  .horasaida {
    text-align: center;
    background: #f9f9f9;
    border: 1px solid #e3e3e3;
  }
  .horasaida p {
    font-size: 1.5em;
    margin: 0.5em;
  }
  .horaAlmoço {
    width: 100%;
    max-width: 300px;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  .horaAlmoço option {
    padding: 0.5em;
  }
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 2em;
    padding: 0;
    background: #f4f4f4;
    color: #333;
  }
  form {
    margin-bottom: 1em;
    text-align: center;
  }
  form div {
    margin-bottom: 0.5em;
  }
  label {
    display: block;
    margin-bottom: 0.3em;
  }
  input {
    padding: 0.5em;
    width: 100%;
    max-width: 300px;
  }
  button {
    padding: 0.7em 1.2em;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
  }
  button:hover {
    background: #0056b3;
  }
  h2 {
    color: #007bff;
  }
  </style>
  