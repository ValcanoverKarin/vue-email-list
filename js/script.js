//1. Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
//   generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue (
    {
        el: '#root',
        data: {
            //1a. creo array di e mail
            eMails: []
            
        },
        methods () {

        },
        mounted() {

                //1c. faccio la richiesta
                axios
                    //1d. aggiungo l' apposita API di Boolean
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    //1e. risposta del server
                    .then( (response) => {
                        //1f. salvo il risultato nella variabile
                        const result = response.data;
                        //1g aggiungo il risultatol'email
                        this.eMails.push(result.response);
                });
            

        }
    }
);