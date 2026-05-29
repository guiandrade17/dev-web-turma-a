<template>
  <div>
    <div id="pedidos-tabela">
      <div>
        <div id="pedidos-tabela-cabecalho">
          <div id="ordem-id">#ID</div>
          <div>Nome</div>
          <div>Hamburguer</div>
          <div>Ponto</div>
          <div>Opcionais</div>
          <div>Status</div>
          <div id="div-acoes">Ações</div>
        </div>
      </div>
    </div>
    <div
      class="pedidos-tabela-linha"
      v-for="pedido in listaPedidosRealizados"
      :key="pedido.id"
    >
      <div id="ordem-numero">{{ pedido.id }}</div>
      <div>{{ pedido.nome }}</div>
      <div>{{ pedido.burguer.nome }}</div>
      <div>{{ pedido.ponto.descricao }}</div>
      <div>
        <ul>
          <li v-for="(complemento, index) in pedido.complemento" :key="index">
            {{ complemento.nome }}
          </li>
        </ul>
        <div class="divider"></div>
        <ul>
          <li v-for="(bebida, index) in pedido.bebida" :key="index">
            {{ bebida.nome }}
          </li>
        </ul>
      </div>
      <div>
        <select name="status" class="status" @change="atualizarStatusPedido($event, pedido.id)">
          <option value="">Selecione</option>
          <option
            v-for="status in listaStatusPedido"
            :key="status.id"
            :value="status.id"
            :selected="status.id == pedido.statusId"
          >
            {{ status.descricao }}
          </option>
        </select>
      </div>
      <div id="div-acoes">
        <img
        @click="deletarPedido(pedido.id)"
         src="/img/icone_lixeira.png" 
         width="35px" 
         height="35px" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListaPedidoComponent",
  data() {
    return {
      listaPedidosRealizados: [],
      listaStatusPedido: [],
    };
  },
  methods: {
    async consultarPedidos() {
      const response = await fetch("http://localhost:3000/pedidos");
      const dados = await response.json();
      console.log(dados);
      this.listaPedidosRealizados = dados;
    },
    async consultarStatusPedido() {
      const response = await fetch("http://localhost:3000/status_pedido");
      this.listaStatusPedido = await response.json();
    },
    async deletarPedido(id) {
        const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
            method: "DELETE",
        });
    },
    async atualizarStatusPedido(event, idPedido){
        const idPedidoAtualizado = event.target.value;

        const atualizaoJson = JSON.stringify({statusId : idPedidoAtualizado});

        await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
            method: "PATCH",
            headers: {"content-Type" : "application/json"},
            body: atualizaoJson,
        });
    },
  },
  mounted() {
    this.consultarPedidos();
    this.consultarStatusPedido();
  },
};
</script>
<style scoped>
#pedidos-tabela {
  width: 100%;
  margin: 0 auto;
}

#pedidos-tabela-cabecalho,
#pedidos-tabela-linhas,
.pedidos-tabela-linha {
  display: flex;
  flex-wrap: wrap;
}

#pedidos-tabela-cabecalho {
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #222;
}

#pedidos-tabela-cabecalho div,
.pedidos-tabela-linha div {
  width: 18%;
}

.pedidos-tabela-linha {
  width: 100%;
  padding: 12px;
  border-bottom: 1px dotted #222;
}

#pedidos-tabela-cabecalho #ordem-id,
.pedidos-tabela-linha #ordem-numero,
.pedidos-tabela-linha #div-acoes,
#pedidos-tabela-cabecalho #div-acoes {
  width: 5%;
}
</style>