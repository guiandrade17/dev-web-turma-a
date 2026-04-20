const { createApp } = Vue;

createApp({
  data() {
    return {
      novaTarefa: '',
      tarefas: []
    };
  },

  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() === '') return;

      this.tarefas.push({
        id: Date.now(),
        texto: this.novaTarefa,
        concluida: false
      });

      this.novaTarefa = '';
    },

    removerTarefa(id) {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    },

    toggleConcluida(id) {
      const tarefa = this.tarefas.find(t => t.id === id);
      tarefa.concluida = !tarefa.concluida;
    }
  }

}).mount('#app');