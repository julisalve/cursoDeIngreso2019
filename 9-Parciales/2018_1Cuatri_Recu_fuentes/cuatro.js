function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=prompt("Indique un numero")
    numeroDos=prompt("Indique otro numero")

    if(numeroUno==numeroDos)
    {
        resultado=numeroUno+numeroDos;
    }
    else
    {numeroUno=parseInt(numeroUno);
     numeroDos=parseInt(numeroDos);

     if(numeroUno>numeroDos)
     {
         resultado=numeroUno/numeroDos;
     }
     else
     {
        resultado=numeroUno+numeroDos
        if(resultado<50)
        {
            resultado= "La suma es "+ resultado + " y es menor a 50";
        } 
     }

    }

    alert(resultado);

}
