	/*  Wizard */
	jQuery(function ($) {
		"use strict";
		// Chose here which method to send the email, available:
		// Simple phpmail text/plain > registration_send.php (default)
		// Phpmaimer text/html > phpmailer/registration_phpmailer.php
		// Phpmaimer text/html SMPT > phpmailer/registration_phpmailer_smtp.php
		// PHPmailer with html template > phpmailer/registration_phpmailer_template.php
		// PHPmailer with html template SMTP> phpmailer/registration_phpmailer_template_smtp.php
		$('form#wrapped').attr('action', 'registration_send.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				var inputs = $(this).wizard('state').step.find(':input');
				return !inputs.length || !!inputs.valid();
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
		//  progress bar
		$("#progressbar").progressbar();
		$("#wizard_container").wizard({
			afterSelect: function (event, state) {
				$("#progressbar").progressbar("value", state.percentComplete);
				$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
			}
		});
		//$('form').on('submit',function(event) {
			event.preventDefault();
			var form = $("form#wrapped");
			form.validate();
			if (form.valid()) {
				$("#loader_form").fadeIn();
				window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=wyB1wDqyeYyusvvv"; // Reemplaza con el enlace de YouTube al que deseas redirigir
			}
		});
		// Obtener el elemento <a> por su ID
var myLink = document.getElementById('myLink');

// Agregar un evento de clic al elemento <a>
myLink.addEventListener('click', function() {
  // Generar un número aleatorio de 7 dígitos
  var randomNumber = Math.floor(Math.random() * 10000000);

  // Mostrar el número generado en el elemento <p>
  var randomNumberElement = document.getElementById('randomNumber');
  randomNumberElement.innerText = 'Code Rude: ' + randomNumber;
});
// Obtener los elementos <input> por sus IDs
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
var input6 = document.getElementById('input6');

// Agregar un evento de cambio al primer input
input1.addEventListener('input', function() {
  var inputValue = input1.value;
  
  // Verificar si el input está relleno con la serie de números predeterminada
  if (inputValue === '8999043') {
    // Establecer valores predeterminados en los otros inputs
    input2.value = 'Arze';
    input3.value = 'Kao';
	input4.value = 'Luis ANgel';
	input5.value = 'Estudinante';
	input6.value = '78576780';
  } else {
    // Limpiar los valores en los otros inputs
    input2.value = '';
    input3.value = '';
	input4.value = '';
	input5.value = '';
	input6.value = '';
  }
});
// Obtener los elementos relevantes del formulario por sus IDs
var rudeInput = document.getElementById('rude');
var nombresInput1 = document.querySelector('input[name="c.I"]');
var nombresInput2 = document.querySelector('input[name="Nombres"]');
var nombresInput3 = document.querySelector('input[name="apellidos"]');
var countrySelect = document.querySelector('select[name="country"]');
var fechaInput = document.querySelector('.small-input');

rudeInput.addEventListener('input', function() {
  var rudeValue = rudeInput.value;
  
  // Verificar si el RUDE es igual a la serie de números específica
  if (rudeValue === '123456') {
    // Establecer valores predeterminados en los otros campos del formulario
	nombresInput1.value='825115';
    nombresInput2.value = 'Jose manuel';
	nombresInput3.value = 'Camacho moarels';
    countrySelect.value = 'La paz';
    fechaInput.value = '2002-01-01';
  }
  else {
    // Limpiar los valores predeterminados en los otros campos del formulario
    nombresInput.value = '';
    countrySelect.value = '';
    fechaInput.value = '';
  }
});



		
