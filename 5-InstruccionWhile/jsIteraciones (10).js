function mostrar()
{

	/*var numero;
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
		
	
	}*/
	var numero;
	var respuesta;
	var sumaPos=0;
	var sumaNeg=0;
	var numerosNeg;
	var numerosPos;
	var cantidadNeg;
	var cantidadPos;
	var cantCeros;
	var cantidadNumPares;
	var promedioNeg;
	var promedioPos;
	var resta;
	
	do
	{
		//respuesta=prompt("¿Quiere cargar un nuevo numero, indique si o no?");
		numero=prompt("Indique un numero");
		numero=parseInt(numero);

		while(isNaN(numero)==true)
		{
			numero=prompt("No indico un numero. Por favor reingrese un dato valido");
			numero=parseInt(numero);
		}

		if(numero>0)
		{
			sumaPos=sumaPos+numero;
			cantidadPos++;
						
		}

		else if (numero<0)
		{
			sumaNeg=sumaNeg+numero;
			cantidadNeg++;
		}
		else
		{
			cantCeros++;
		}

		if(numero%2==0)
		{
			cantidadNumPares++;
		}
	
		

		promedioNeg=sumaNeg/cantidadNeg;
		promedioPos=sumaPos/cantidadPos;
		 
		resta=sumaPos-sumaNeg;
		respuesta=prompt("¿Quiere cargar un nuevo numero, indique si o no?");
	}

		while (respuesta=="si");

		alert()

	
	





}//FIN DE LA FUNCIÓN