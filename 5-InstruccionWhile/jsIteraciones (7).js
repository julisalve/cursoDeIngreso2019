function mostrar()
{

var contador=0;
var respuesta ="si";
var acumulador=0;
var numero;


while(respuesta=="si")
{
	numero=prompt("Indique un numero")
	numero=parseInt(numero);
	
	if(isNaN(numero)==true)
	{
		respuesta=prompt("No es un valor numero. Ingrese un numero numero")
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
	




}//FIN DE LA FUNCIÓN