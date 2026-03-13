const meuAppVue = {
    data() {
        return {
            nome: "Guilherme Brito",
            idade: 18,
            inputText:"",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");