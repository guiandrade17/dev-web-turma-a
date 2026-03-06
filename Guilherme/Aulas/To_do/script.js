window.onload = function () {
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {
       // Recupera o valor do campo input text 
        const texto = input.value.trim();
       
       // Criar um elemento da minha lista de tarefas 
        const li= this.document.createElement("li");

       // Adicionar o valor do input no meu item da lista    
        li.textContent = texto;

       // Adicionando o clicl para Riscar a tarefa    
        li.addEventListener("click", () => {
          li.classList.toggle("concluida");
        });

       // Criação do botão de Excluir 
        const btnRemover = this.document.createElement("button");
       btnRemover.textContent = "x";
       // add a classe de estilo do botão fechar    
       btnRemover.classList.add("fechar");
       btnRemover.addEventListener("click", () => {
        li.remove();
       });

       // Adicionando o botão X na LI (Item)    
       li.appendChild(btnRemover);

       // Adiciona o item na lista para ser apresentado 
        lista.appendChild(li);

       // Limpa o valor após a adição 
       input.value = "";


       


    });
};