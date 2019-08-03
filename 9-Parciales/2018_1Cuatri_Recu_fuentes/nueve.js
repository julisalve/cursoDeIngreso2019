function mostrar()
{
var animales;
var peso;
var temperatura;
var respuesta="si";
var cantTempPares=0;
var tempMasPesado;
var animalMasPesado;
var animalesBajoCero=0;
var promedio;
var animalMasPesado;
var animalMasLiviano;
var pesoMax;
var contador=0;
var acumulador=0;
var pesoMaxBajoCero;
var pesoMinBajoCero;


while(respuesta=="si")
{
    animales=prompt("Indique nombre de un animal");
    peso=prompt("Indique peso")
    peso=parseInt(peso)

    while(isNaN(peso)==true || peso<1 || peso>1000)
    {
        peso=prompt("No es un peso valido. Reingrese");
        peso=parseInt(peso);
    }

    acumulador=acumulador+peso;

    temperatura=prompt("Indique temperatura");
    temperatura=parseInt(temperatura);

    while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
    {
        temperatura=prompt("Temperatura no valida, reingrese");
        temperatura=parseInt(temperatura);
    }

    if(contador==0 || peso>pesoMax)
    {
        pesoMax=peso;
        animalMasPesado=animales;
        tempMasPesado=temperatura;
    }
    
    contador++;
   
    if(temperatura%2==0 && temperatura!=0)
    {
        cantTempPares++;
    }

    if(temperatura<0)
    {
       

        if(animalesBajoCero==0 || peso>pesoMaxBajoCero)
        {
        pesoMaxBajoCero=peso;
        }
        
        if(animalesBajoCero==0 || peso<pesoMinBajoCero)
        {
        pesoMinBajoCero=peso;
        }

        animalesBajoCero++;
        
    }

    

    promedio=acumulador/contador;
    respuesta=prompt("Quiere seguir cargando datos?");


    
}

document.write("A) La cantidad de temperaturas pares es: "+cantTempPares+ "<br>");
document.write("B) El nombre del animal mas pesado es: "+animalMasPesado+ " y su temperatura es: "+tempMasPesado+"<br>");
document.write("C) La cantidad de animales que viven bajo cero es: "+animalesBajoCero+ "<br>");
document.write("D) El promedio del peso es: "+promedio+"<br>");
document.write("F) El peso max de los animales bajo cero es: "+pesoMaxBajoCero+ " y el peso minimo de los animales bajo cero es: "+pesoMinBajoCero);

}
