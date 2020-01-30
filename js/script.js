// Esercizio
// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// I quadrati fateli prima a mano e poi con javascript.

$('.border').click(
  function () {
    $(this).addClass('square');
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato) {
        var numero = data.response;
        console.log(numero);
        if (numero <= 5) {
          $('.square').addClass('yellow')
          $('.yellow').removeClass('square')
          $('.yellow').text(numero)
        } else {
          $('.square').addClass('green')
          $('.green').removeClass('square')
          $('.green').text(numero)
        }
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    });
  }
)
