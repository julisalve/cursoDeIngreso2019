/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importeIngresado
    var importeConDescuento;

    importeIngresado=document.getElementById("importe").value;
    importeIngresado=parseInt(importeIngresado);

    importeConDescuento=importeIngresado-importeIngresado*0.25
    document.getElementById("resultado").value=importeConDescuento;
    
}
