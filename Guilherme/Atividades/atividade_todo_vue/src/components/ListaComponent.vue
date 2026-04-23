<script>
export default {
  data() {
    return {
      novaTarefa: '',
      tarefas: []
    }
  },
  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() === '') return;

      this.tarefas.push({
        texto: this.novaTarefa,
        concluida: false
      });

      this.novaTarefa = '';
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    },
    toggleConcluida(index) {
      this.tarefas[index].concluida = !this.tarefas[index].concluida;
    }
  }
}
</script>

<template>
  <div>
    <h1>Lista de Tarefas</h1>

    <input v-model="novaTarefa" @keyup.enter="adicionarTarefa">
    <button @click="adicionarTarefa">Adicionar</button>

    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">

        <span 
          @click="toggleConcluida(index)"
          :style="{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }"
        >
          {{ tarefa.texto }}
        </span>

        <button @click="removerTarefa(index)">Remover</button>

      </li>
    </ul>
  </div>
</template>

<style>
body {
  font-family: Arial;
}
</style>