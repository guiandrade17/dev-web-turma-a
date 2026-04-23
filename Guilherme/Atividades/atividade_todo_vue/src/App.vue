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
  <div class="container">
    <h1>📝 Minhas Tarefas</h1>

    <div class="input-group">
      <input 
        v-model="novaTarefa" 
        @keyup.enter="adicionarTarefa"
        placeholder="Digite uma tarefa..."
      >
      <button @click="adicionarTarefa">Adicionar</button>
    </div>

    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">

        <span 
          :class="{ concluida: tarefa.concluida }"
          @click="toggleConcluida(index)"
        >
          {{ tarefa.texto }}
        </span>

        <button class="delete" @click="removerTarefa(index)">
          ❌
        </button>

      </li>
    </ul>

    <p v-if="tarefas.length === 0" class="empty">
      Nenhuma tarefa ainda 👀
    </p>
  </div>
</template>

<style>
body {
  background: #f4f6f8;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 400px;
  margin: 60px auto;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #369870;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.concluida {
  text-decoration: line-through;
  color: gray;
}

.delete {
  background: #e74c3c;
}

.delete:hover {
  background: #c0392b;
}

.empty {
  text-align: center;
  color: gray;
  margin-top: 15px;
}
</style>