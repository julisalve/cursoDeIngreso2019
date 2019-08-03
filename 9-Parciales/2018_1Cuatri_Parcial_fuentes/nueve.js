function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta="si";
    var cantTempPares=0;
    var marcaMasPesada;
    var marcaMenosPesada;
    var productosMenosCeroGrados=0;
    var promedio;
    var acumuladorPeso=0;
    var pesoMax;
    var pesoMin;
    var contador=0;
    var marcaMasPesada;


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
        if(contador==0)
        {
            pesoMax=peso;
            pesoMin=peso;
            marcaMasPesada=marca;
            
        }
        else if (peso>pesoMax)
        {
           pesoMax=peso;
            marcaMasPesada=marca;
        }
        else if (peso<pesoMin)
        {
            pesoMin=peso;
            marcaMenosPesada=marca;
        }
        contador++;
        acumuladorPeso=acumuladorPeso+peso;


        temperatura=prompt("Indique temperatura del producto");
        temperatura=parseInt(temperatura);

        while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
        {
            temperatura=prompt("Indique temperatura valida entre -30 y 30 grados");
            temperatura=parseInt(temperatura);

        }
        if(temperatura%2==0 && temperatura!=0)
            {
            cantTempPares++;   
            }

        if(temperatura<0)
        {
            productosMenosCeroGrados++;
        }
      

        respuesta=prompt("Quiere seguir cargando mas datos?");
    
        promedio=acumuladorPeso/contador;
    }

    




    document.write("A)La cant de temperaturas pares es: "+cantTempPares+"<br>")
    document.write("B) La marca mas pesada es: "+marcaMasPesada+"<br>")
    document.write("C) La cantidad de producto que se conserva a menos de 0 grados es: "+ productosMenosCeroGrados+"<br>") 
    document.write("D) El promedio del peso de todos los productos es: "+ promedio)
    document.write("F)El peso maximos es: "+pesoMax+ " y el minimo es: "+pesoMin);
}
