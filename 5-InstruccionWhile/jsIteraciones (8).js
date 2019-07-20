function mostrar()
{
var numero;
var acumuladorSuma=0;
var acumuladorMultiplicacion=1;
var contador=0;
var respuesta="si";

while(respuesta=="si")
{
	numero=prompt("Indique un numero");
	numero=parseInt(numero);
	
		if(numero>0)
		{
		acumuladorSuma=acumuladorSuma+numero;
		}
		else{
			acumuladorMultiplicacion=acumuladorMultiplicacion*numero;
		}

				
	respuesta=prompt("Quiere seguir cargando otro numero?");
}


document.getElementById("suma").value=acumuladorSuma;
document.getElementById("producto").value=acumuladorMultiplicacion;

}//FIN DE LA FUNCIÓN