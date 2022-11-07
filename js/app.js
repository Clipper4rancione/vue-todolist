/*
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”

*/


const { createApp } = Vue;

createApp({
    data(){
        return{
            logo: 'img/logo.png',

            errorMsg: '',
            newMsg: '',
            tasks: [
                {
                    text: 'Comprare crocchette a Mack',
                    done: false
                },
                {
                    text: 'Esercitarsi con Vue.Js',
                    done: true
                },
                {
                    text: 'Finire i 6 mesi di corso Full Stack Web Developer',
                    done: false
                },
            ]
        }
    },
    methods: {
        removeItem(index) {
            console.log(index);
            this.errorMsg = '';
            if(this.tasks[index].done) {
                this.tasks.splice(index, 1)
            }else {
                this.errorMsg = 'Attenzione! Non puoi eliminare una task se non l\'hai ancora completata'
            }
        },
        createItem() {
            this.errorMsg = '';

            if(this.newMsg.length < 5) {
                this.errorMsg = 'Attenzione! Il messaggio deve avere almeno 5 caratteri.';
            }else {
                const newItem = {
                    text: this.newMsg,
                    done: false
                }
                this.tasks.unshift(newItem);
                this.newMsg = '';
            }
        }
    }

}).mount('#app')