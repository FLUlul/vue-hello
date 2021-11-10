/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

var app = new Vue (
    {
        el: "#container",
        data: {
            message: "Hello Vue!",
            image: "https://unsplash.it/1500/500?image=666"
        }
    }
);