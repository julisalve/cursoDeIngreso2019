function mostrar()
{

	var numero ;

	numero=prompt("Indique un numero entre 0 y 9");
	numero=parseInt(numero);

	while(numero<0 || numero>9)
	{
		
		numero=prompt("El numero no es correcto");
	}

	document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN