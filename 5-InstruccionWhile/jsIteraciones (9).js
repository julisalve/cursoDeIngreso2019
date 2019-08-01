function mostrar()
{

var numero;
var respuesta="si";
var numeroMax;
var numeroMin;
var esPrimeraIteracion=true;


while(respuesta/*!="no"*/)
{
	numero=prompt("Indique un numero");
	numero=parseInt(numero);

	while(isNaN(numero)==true) // si se evalua entre -10 y 10 isNan(numero) || parseInt(numero)>10 || parseInt(numero)<-10
	{
		numero=prompt("Indique un valor numerico");
		numero=parseInt(numero);
	}

	if(esPrimeraIteracion==true)// o contador ==0
	{
		numeroMax=numero;
		numeroMin=numero;
		esPrimeraIteracion=false;
	}
	else if(numero>numeroMax)
	{
		numeroMax=numero
	}
	else if(numero<numeroMin)
	{
		numeroMin=numero;
	}

	
	//si va con var contador, entonces al final va contador ++
	
	respuesta=confirm("desea continuar")//prompt("ingrese no para finalizar");
}

document.getElementById("maximo").value=numeroMax;
document.getElementById("minimo").value=numeroMin;

}//FIN DE LA FUNCIÓN