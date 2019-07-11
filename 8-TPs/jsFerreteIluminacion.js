/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var precio;
     var precioFinal;
     var marca;
     var iibb;


     cantidad=document.getElementById("Cantidad").value;
     cantidad=parseInt(cantidad);

     marca=document.getElementById("Marca").value;
     
     precio=35;

     //A//
     if(cantidad>=6)
     {
        precioFinal=(precio*cantidad)*50/100;
        document.getElementById("precioDescuento").value=precioFinal;
           
     }
     else if(cantidad==5 && marca=="ArgentinaLuz")
     {
         precioFinal=(precio*cantidad)*60/100 //40% de dto
         document.getElementById("precioDescuento").value=precioFinal;
     }
     else if (cantida==5 && marca !="ArgentinaLuz")
     {
         precioFinal=(precio*cantidad)*70/100; //30% de dto
         document.getElementById("precioDescuento").value=precioFinal;

     }

     else if(cantidad==4 && (marca=="ArgetinaLuz" || marca=="FelipeLamparas"))
     {
         precioFinal=(precio*cantidad)*0.75; //25% de dto
         document.getElementById("precioDescuento").value=precioFinal;
     }
     else if (cantidad==4 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
     {
         precioFinal=(precio*cantidad)*0.8; //20% de dto
         document.getElementById("precioDescuento").value=precioFinal;
     }
     else if (cantidad==3 && marca=="ArgentinaLuz")
     {
         precioFinal=(precio*cantidad)*0.85;
         document.getElementById("precioDescuento").value=precioFinal;
     }
     else if (cantidad==3 && marca=="FelipeLamparas")
     {
         precioFinal=(precio*cantidad)*0.9;
         document.getElementById("precioDescuento").value=precioFinal;
     }
     else if(cantidad==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
     {
         precioFinal=(precio*cantidad)*0.95;
         document.getElementById("precioDescuento").value=precioFinal;
     }
     else if(precioFinal>120)
     {
        iibb=precioFinal*0.1
        precioFinal=precioFinal+iibb;
        document.getElementById("precioDescuento").value=precioFinal;
        alert("IIBB Usted paga "+iibb);
     }


}
