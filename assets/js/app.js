function add(){

	autosize(document.querySelector('textarea'));
	/*tomar texto ingresado en textarea*/
	var comment= document.getElementById('comment');

	/*limpiar textarea*/
	document.getElementById('comment').value='';

	/*guardar contenedor html en variable*/
	var cont= document.getElementByClassName('cont');

	/*validar que no esté vacío*/
	if (comments.length==0 ||comments.length==null) {
	alert("Debes escribir un mensaje");
	return false;
	}
}

