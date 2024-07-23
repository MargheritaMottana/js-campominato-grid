/*

per creare elemento html
    1. document.createELement --> questo consente di poterci cliccare sopra in modo più facile
    2. stringa con innerHTML
*/

// dichiaro il bottone per far partire il gioco
const playBtn = document.getElementById('gioca');

// ascolto il click sul bottone
playBtn.addEventListener('click', function () {
    console.log('Ho cliccato');

    // genero un ciclo che mi scriva 100 elementi al clicl
    for (let i = 1; i <= 100; i++) {
        console.log(i);

        // creo l'elemento in html
        const square = document.createElement('div');
        // metto il testo dentro il quadrato
        square.innerHTML = i;
        // metto il quadrato dentro il suo container
        squareContainer.append(square);

        //ascolto il click
        square.addEventListener('click', function () {

            // aggiungo la classe del quadrato selezionato
            this.classList.add('squareSelected')
            console.log(this.innerHTML);
        });

    };

})