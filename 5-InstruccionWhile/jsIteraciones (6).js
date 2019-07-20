function mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		numero=prompt("Indique otro numero");
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;	
	}
	
	
		

	

	document.getElementById("suma").value=acumulador

	document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN