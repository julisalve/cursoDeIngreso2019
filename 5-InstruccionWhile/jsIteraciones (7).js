function mostrar()
{

/*var contador=0;
var respuesta ="si";
var acumulador=0;
var numero;


while(respuesta=="si")
{
	numero=prompt("Indique un numero")
	numero=parseInt(numero);
	
	if(isNaN(numero)==true)
	{
		numero=prompt("No es un valor numero. Ingrese un numero")
		numero=parseInt(numero);
	}
	else
	{

	numero=parseInt(numero);
	contador++;
	acumulador=acumulador+numero;
	
	}
	respuesta=prompt("Quiere ingresar un numero");
}

document.getElementById("suma").value=acumulador;

document.getElementById("promedio").value=acumulador/contador;
	
*/

var acumulador =0;
var contador=0;
var respuesta;
var numero;

do
{
	numero=prompt("Indique un numero");
	while(isNaN(numero))
	{
		numero=prompt("indique un numero correcto")
	}
	numero=parseInt(numero);


	acumulador=acumulador + numero;
	contador++;

	respuesta=prompt("desea seguir cargando");

	while (respuesta!="s" && respuesta !="n")
	{
		respuesta=prompt("error")
	}
}while(respuesta=="si");
}

//FIN DE LA FUNCIÓN