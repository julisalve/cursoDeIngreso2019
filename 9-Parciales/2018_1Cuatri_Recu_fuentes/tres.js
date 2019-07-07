//Pedir por prompt el precio y el porcentaje de descuento, 
//mostrar el precio final con descuento por id.""

function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var precioFinalConDescuento;

    precio=prompt("Indique el precio");
    porcentajeDeDescuento=prompt("Indique porcentaje de descuento");
    precioFinalConDescuento=precio-precio*porcentajeDeDescuento/100;

    document.getElementById("elPrecioFinal").value=precioFinalConDescuento;
}
