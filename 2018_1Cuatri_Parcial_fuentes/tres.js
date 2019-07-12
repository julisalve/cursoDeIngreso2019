//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final 
//con descuento por id.//
function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var precioFinal;

    precio=prompt("Indique el precio");
    porcentajeDeDescuento=prompt("Indique porcentajo de descuento");

    document.getElementById("elPrecioFinal").value=precio-precio*porcentajeDeDescuento/100;

}
