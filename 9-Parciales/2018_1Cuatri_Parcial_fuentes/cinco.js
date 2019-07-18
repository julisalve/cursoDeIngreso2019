function mostrar()
{

    var planeta;
    var anuncio;

    planeta=prompt("Indique un planeta");

    switch(planeta)
    {
        case "mercurio":
        case "venus":
            anuncio="Aca hace mas calor";
            break;

        case "tierra":
            anuncio="Aca vivimos";
            break;
        
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            anuncio="Aca hace mas frio";
            break;

        default:
            anuncio="No es un planeta valido";
            break;

    }

    alert(anuncio);
}
