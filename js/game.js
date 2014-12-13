var palabras = new Array();
var elegidos = new Array();
var r_word, n_letter;
var aciertos = 0, errores = 0;
var msg_go;
var procesar;
var primer_letra =false;
cargando = false;

ganaste = false;

//var invisible = "#b3dced";

var letters = "";
var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var space_write, list_write;
var txt_respuesta, btn_buscar;

function init () {
	space_write = document.getElementById("space_write");
	list_write = document.getElementById("list_write");
	txt_respuesta = document.getElementById("respuesta");
	btn_buscar = document.getElementById("intentar");
	msg_go = document.getElementById("msg_go");
	txt_respuesta.maxLength = 1;
	preparar();	
}
function preparar () {
	aciertos = 0, errores = 0;
	ganaste = false;
	clearLetters();
	txt_respuesta.value = "";
	palabra = seleccion_palabra();
	r_word = palabra;
	load_space(palabra);
}
function load_space (word) {
	n_letter = word.length;
	for (var i = 0; i < n_letter; i++) {
		casilla = document.createElement("div");
		casilla.id = "c"+String(i);
		casilla.classList.add("casilla");

		item_list = document.createElement("li");
		item_list.classList.add("item_list");
		list_write.appendChild(item_list);
		item_list.appendChild(casilla);

		list_write.style.width = n_letter*70+"px";
		casilla.innerHTML = "*";

		txt_respuesta.addEventListener("focus",seleccion,false);
		txt_respuesta.addEventListener("click",seleccion,false);

	}
}

function seleccion () {

	casilla = txt_respuesta;
	casilla.value = "";

	casilla.onkeydown = function(e) {
		e.preventDefault();
		key = e.keyCode;
		letra = "";
		casilla = txt_respuesta;
		//console.log(key);

		if (key >= 65 && key <= abc.length+65) {
			letra = abc[key-65];
			casilla.style.color = "#000";
			//console.log(e);
			
		}else if(key == 192){
			letra = "ñ";
			casilla.style.color = "#000";
			//console.log(e);
		}
		if(key == 13){
			evaluar();
			casilla.value = "";
			//console.log(e);
		}
		casilla.value = letra;
	}
	btn_buscar.onclick = function() {
		evaluar();
		casilla.value = "";
	}

}

function evaluar () {
	if (cargando) {
		console.log("Esperate");
	}else{

		caracter = false;
		elemento = null;
		usado = false;
		letra = txt_respuesta.value;
		//console.log(letra);
		temp_aciertos = aciertos;

		count_letters = 0;

		if (letters.length > 0) {
			for (var i = 0; i < letters.length; i++) {
				if(letters[i] == letra && letra != ""){
					count_letters++;
					procesar = false;
				}
				if (count_letters == 0) {
					procesar = true;
				}else{
					procesar = false;
					show_msg("Esa letra ya esta, prueba con otra");
				}
			}
		}else{
			enter_letter(txt_respuesta.value)
			primer_letra = true;
			procesar = true;
		}

		if(procesar && !primer_letra && letra != ""){enter_letter(txt_respuesta.value)}
		primer_letra = false;

		for (var i = 0; i < abc.length; i++) {
			//console.log(abc[i]+" : "+letra);

			if(abc[i] == letra || letra == "ñ" && procesar && letra != ""){
	
				caracter = true;

				for (var j = 0; j < r_word.length; j++) {
					if (letra == r_word[j]) {

						//console.log(abc[i]+" : "+letra);

						elemento = "c"+String(j);
						casilla = document.getElementById(elemento);
						if (casilla.getAttribute("data-usado") == null) {
							aciertos++;
							casilla.setAttribute("data-usado", true);
							
							usado = casilla.getAttribute("data-usado");
						}

						casilla.innerHTML = letra;
						casilla.style.color = "#000";

						casilla.style.cursor = "default";
						casilla.parentElement.style.borderBottom = "solid 5px #00f";
						
						if (aciertos == n_letter) {
							show_msg("Ganaste");
							ganaste = true;
							ocultar_ahorcado();
							cargando = true;

							var time_perdi =setTimeout(function() {
								borrar();
								preparar();
								cargando = false;
								clearTimeout(time_perdi);
							},1000);

						}
					}
				}
				caracter = false;
			}
		}
		if (temp_aciertos == aciertos && procesar && letra != "") {
			errores++;
			ahorcar();
			//show_msg("Error!");
		}
		if (errores == 9 && procesar && letra != "") {
			show_msg("Perdiste<br>-------------<br>"+r_word);

			ocultar_ahorcado();
			txt_respuesta.removeEventListener("focus",seleccion,false);
			txt_respuesta.removeEventListener("click",seleccion,false);
			btn_buscar.onclick = null;

			cargando = true;
			var time_perdi =setTimeout(function() {
				borrar();
				preparar();
				cargando = false;
				clearTimeout(time_perdi);
			},1000);
		}
	}
}

function enter_letter (l) {
	var letters_p = document.getElementById("letters").children[0];

	if (letters == 0) {
		letters_p.innerHTML +=l;
	}else{
		letters_p.innerHTML +=" - "+l;
	}
	letters+=l;
}
function clearLetters (){
	var letters_p = document.getElementById("letters").children[0];
	letters_p.innerHTML = "";
	letters = "";
}

function show_msg (msg) {
	msg_go.style.display = "block";
	msg_go.classList.add("desvanecer");
	msg_go.innerHTML='<p id="msg">'+msg+'</p>';
	tiempo_msg = setTimeout(function () {
		msg_go.style.display = "none";
		msg_go.classList.remove("desvanecer");
		clearTimeout(tiempo_msg);
	},2000);
}

function ahorcar () {
	elemento_show = document.getElementsByClassName("no-visible")[0];
	elemento_show.classList.remove("no-visible");
	elemento_show.classList.add("visible");
}

function ocultar_ahorcado () {
	elemento_hidden = null;
	n_element = document.getElementsByClassName("visible").length;
	for (var i = 0; i < n_element; i++) {
		elemento_hidden = document.getElementsByClassName("visible")[0];
		
		elemento_hidden.classList.remove("visible");
		elemento_hidden.classList.add("no-visible");
	};
}

function borrar () {
	for(var i = 0; i < r_word.length; i++){
		list_write.removeChild(document.getElementsByClassName("item_list")[0]);
	}
}

window.addEventListener("load", init);