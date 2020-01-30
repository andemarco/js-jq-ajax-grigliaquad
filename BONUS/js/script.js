// Esercizio
// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// I quadrati fateli prima a mano e poi con javascript.
$(document).ready (function () {

  for (var i = 0; i < 36; i++) {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var contenuto = {
    };

    var html = template(contenuto);
    $(".container").append(html);
  }

  $('.border').click(
    function () {
      var square = $(this);
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          var numero = data.response;
          console.log(numero);

          if ($(square).hasClass('green') || $(square).hasClass('yellow')) {
            alert('numero già cliccato')
          } else if (numero <= 5) {
            $(square).text(numero)
            $(square).addClass('yellow')
          } else if (numero > 5){
            $(square).text(numero)
            $(square).addClass('green')
          }
        },
        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      });
    }
  )
});
// if (numero <= 5) {
//   $(square).text(numero)
//   $(square).addClass('yellow')
//   $('.yellow').removeClass('green')
// } else if (numero > 5){
//   $(square).text(numero)
//   $('.green').addClass('yellow')
// } else if ($(square).hasClass('green') || $(square).hasClass('yellow')){
//   alert('numero già cliccato')
// }
