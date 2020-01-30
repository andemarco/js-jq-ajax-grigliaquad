// Esercizio
// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// I quadrati fateli prima a mano e poi con javascript.

$('.border').click(
  function () {
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato) {
        var numero = data.response;
        $(this).text(numero);
            if (numero <= 5) {
              $(this).addClass('yellow');
            }else {
              $(this).addClass('red');
            }
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    });
  }
)
