function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta="si";
    var cantTempPares=0;
    var marcaMasPesada;
    var productosMenosCeroGrrados;
    var promedio;
    var pesoMax;
    var pesoMin;

    while(respuesta=="si")
    {
        marca=prompt("Indique marca del producto");
        peso=prompt("Indique peso del producto");
        peso=parseInt(peso);

        while(isNaN(peso)==true || peso<1 || peso >100)
        {
            peso=prompt("Los valores indicados no son numericos ni se encuentran dentro del rango entre 1 y 100."+"\n"+ "Ingrese nuevo valor");
            peso=parseInt(peso);
        }

        temperatura=prompt("Indique temperatura del producto");
        temperatura=parseInt(temperatura);

        while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
        {
            temperatura=prompt("Indique temperatura valida entre -30 y 30 grados");
            temperatura=parseInt(temperatura);
        }

        respuesta=prompt("Quiere seguir cargando mas datos?");
    }

    if(temperatura%2==0)
    {
     cantTempPares++;   
    }

    document.write("A)La cant de temperaturas pares es: "+cantTempPares)
}
