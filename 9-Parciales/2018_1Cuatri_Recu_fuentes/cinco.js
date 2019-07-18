function mostrar()
{

    var diaSemana;
    var anuncio;

    diaSemana=prompt("Indique un dia de la semana");

    switch(diaSemana)
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            anuncio="A trabajar";
            break;

        case "sabado":
        case "domingo":
            anuncio="Buen fin de semana";
            break;

        default:
            anuncio="No es un dia de la semana valido";
            break;
    }

    alert(anuncio);
}
