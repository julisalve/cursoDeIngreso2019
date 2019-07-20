function mostrar()
{

	var numero;
	var numeroDos;

	var suma;
	numeroDos=33; //false
	numeroDos="33"//false
	numeroDos="lalala"//true
	suma=isNaN(numeroDos)//false, porque es un numero
	console.log(suma);

	while(isNaN(numero)==false) //mientras lo ingresado no sea un numero ingresa en el bucle

	{
		numero=prompt("Indique un numero. error");
		numero=parseInt(numero);
	}
		
	
	}




}//FIN DE LA FUNCIÓN