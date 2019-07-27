function mostrar()
{

    var nota;
    var sexo;
    var contador;
    var sumaDeNotas;
    var promedio;
    var notaMenor=0;
    var sexoNotaMenor;
    var cantidad=0;


    sumaDeNotas=0;
    

    

    for(contador=0; contador<5; contador=contador+1)

    {
        nota=prompt("Indique nota");
        nota=parseInt(nota);

        while(isNaN(nota)==true || nota<0 || nota>10)
        {
            nota=prompt("La nota no esta dentro del rango correcto o no es un valor numerico. Ingrese un valor correcto entre 0 y 10");
            nota=parseInt(nota);
            
        }

        sexo=prompt("Indique sexo");

        while(sexo!="m" && sexo!="f")
        {
            sexo=prompt("El sexo no es valido."+"\n"+ "Ingrese un nuevo valor, el cual puede ser m para masculino o f para femenino");
        }

        sumaDeNotas=sumaDeNotas+nota;

        

        if(contador==0 || nota<notaMenor)
        {
            notaMenor=nota;
            sexoNotaMenor=sexo;
        }
        
        if(sexo=="m" && nota>=6)
        {
            cantidad=cantidad+1;
        }

        
         
    }

    promedio=sumaDeNotas/contador;

    alert("El promedio de todas las notas es "+promedio+"\n"+"La nota mas baja es "+notaMenor+" y el sexo es "+sexoNotaMenor+"\n"+"La cantidad de varones que su nota fue 6 o mas es: "+cantidad);

}
