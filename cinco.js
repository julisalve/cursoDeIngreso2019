function mostrar()
{
    var planeta;
    //var anuncio;//
    
    planeta=prompt("Indique un planeta del sistema solar");

    switch(planeta)
    {
        case "mercurio":
        case "venus":
           {
                //anuncio="Aca hace mas calor"
                alert("Aca hace mas calor");
                break;
            }
        case "tierra":
            {
                //anuncio="Aca vivimos"
                alert("Aca vivimos");
                break;
            }
        case "marte":
        case "jupiter":    
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            {
                //anuncio="Aca hace mas frio"
                alert("Aca hace mas frio");
                break;
            }
        default:
            {
                //anuncio="No es un planeta valido"
                alert("No es un planeta valido");
                break;
            }
    }

    //alert(anuncio); // se puede hace como esta comentado tambien para reemplazar a los alert
    
}

