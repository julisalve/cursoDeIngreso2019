function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
   

    numeroUno=prompt("Indique un numero");
    
    numeroDos=prompt("Indique otro numero");
    
    
    if(numeroUno==numeroDos)
    {
        resultado=numeroUno+numeroDos;
    }
    
     else 
     {numeroUno=parseInt(numeroUno);
      numeroDos=parseInt(numeroDos);

         if (numeroUno>numeroDos)
    
         {
              resultado=numeroUno-numeroDos;
       
         }
         else 
        {
           resultado=numeroUno+numeroDos;
           if(resultado>10)
           {
            resultado="La suma es "+ resultado+ " y supera el 10";
           }
         }
    
    }
    alert(resultado) 
}
