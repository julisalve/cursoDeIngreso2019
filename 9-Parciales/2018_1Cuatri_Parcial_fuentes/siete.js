function mostrar()
{

    var nota;
    var sexo;
    var contador;
    var sumaDeNotas;
    var promedio;


    sumaDeNotas=0;
    

    

    for(contador=0; contador<5; contador=contador+1)

    {
        nota=prompt("Indique nota");
        nota=parseInt(nota);

        while(nota<0 || nota>10)
        {
            nota=prompt("La nota no esta dentro del rango correcto. Ingrese una nueva nota");
            nota=parseInt(nota);
            
        }
    
        sexo=prompt("Indique sexo");

        while(sexo!="m" && sexo!="f")
        {
            sexo=prompt("El sexo no es valido."+"\n"+ "Ingrese un nuevo valor, el cual puede ser m para masculino o f para femenino");
        }

        
        sumaDeNotas=sumaDeNotas+nota;

        promedio=sumaDeNotas/contador;




        
        
    }


    alert("El promedio de todas las notas es "+promedio);

}
