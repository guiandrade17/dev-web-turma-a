<template>
    <div>
       <footer id="footer">
           <p>Bem Vindo: {{ nome }} Olá Mundo do <b>VUE com CLI</b> </p>
       </footer>
    </div>
</template>
<script>
    export default {
        name:"HomeComponent",
        data() {
            return {
                nome:"Guilherme",
            };
        },
    };

</script>