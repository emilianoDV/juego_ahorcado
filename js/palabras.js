function seleccion_palabra () {
	palabras = ["vampiro","arroz","camaron","television","china","chalupa","guardia","cilantro","flojera","dormir","zoologico","tablero","pistola","semaforo","anchoa","apellido","postal","jaula","jazmin","rayo","tostada","jicara","hola","cobre","indigena","alienigena","miercoles","mosca","computadora","ratificar","dinastia","linterna","cigarro","canica","jamaica","rosa","kiosko","general","soldado","asalto","perro","gato","inocente","figura","triangulo","circulo","redondo","anuario","fotografia","intestino","celofan","celular","carmin","nariz","verde","berengena","cantaro","rincon","guante","platino","oreja","astuto","mentira","acierto","sandia","señor","muerte","bufon","arlequin","puñetazo","cachetada","particula","camioneta","pestaña","azteca","romano","arandano","oruga","cristal","mafia","insecto","grande","pelicula","gimnasia","tinaco","organo","corazon","pancreas","vaso","inchazon","laguna","trenza","tentaculo","pulpo","tiburon","ballena","tucan","romper","gente","cinta","poligono","bandera","diferencia","girasol","frances","frio","fragancia","sueter","triton","huevo","antologia","hueco","botella","dado","diamante","licuadora","tetraedro","icosaedro","piltrafa","peinado","orina","tenencia","tarjeta","xilofono","axioma","pintar","irlandes","infinito","iteracion","inundacion","aceite","selva","silbato","sonaja","sintetico","infierno","inocuo","instinto","opacidad","orgullo","argolla","cilindro","enredar","historia","hidrogeno","tirante","didactico","donar","dinosaurio","dudar","defragacion","rastrillo","visual","virtual","virus","pandemia","vinil","resorte","restriccion","resureccion","fijador","feroz","facilidad","fuente","fortificar","anudar","anillo","anelo","hermosa","familia","fiscal","princesa","reyno","hermandad","yoyo","yeso","yunke","arrollo","ciruela","intensidad","intenso","zapato","cerillo","zapatero","zorra","sintaxis","anglosajon","anglisismo","ingles","semantica","sonido","simbiotico","intrinseco","informatica","ludograma","pasmado","impresion","impresionado","rayuela","ritual","mistico","amistad","intento","ironico","ironia"];
	n = Math.floor(Math.random()*palabras.length);
	palabra = palabras[n];
	//console.log(palabra+" : "+palabras.length+" : "+n);
	return palabra;
}