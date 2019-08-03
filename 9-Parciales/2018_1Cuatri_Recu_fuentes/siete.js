function mostrar()
{

    var nota;
    var sexo;
    var promedio;
    var acumulador=0;
    var notaMasBaja;
    var sexoNotaMasBaja;
    var varonesMasSeis=0;
    var contador;

    for(contador=0; contador<5; contador++)
    {
        nota=prompt("Indique una nota");
        nota=parseInt(nota);

        while(isNaN(nota)==true || nota<0 || nota>10)
        {
            nota=prompt("No es una nota valida. Reingres");
            nota=parseInt(nota);
        }

        sexo=prompt("Indique sexo")

        while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
        {

            sexo=prompt("No es un sexo valido. Reingrese");

        }
        acumulador=acumulador+nota;

        if(contador==0 || nota<notaMasBaja)
        {
            notaMasBaja=nota;
            sexoNotaMasBaja=sexo;
        }
        

        if(nota>=6 && sexo=="m")
        {
            varonesMasSeis++;
        }
        else 
        {
            varonesMasSeis="No hay";
        }

    }
    promedio=acumulador/contador;
    alert("El promedio de notas totales es: "+promedio+"\n")
    alert("La nota mas baja es: "+notaMasBaja+" y el sexo es: "+sexoNotaMasBaja+ "\n");
    alert("La cantidad de varones que su nota fue mayor o igual a 6 es: "+varonesMasSeis)

}
