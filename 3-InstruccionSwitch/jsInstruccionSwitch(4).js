function mostrar()
{
//tomo la edad  

//alert (mesDelAño);
	
var mesDelAño 

mesDelAño= document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
           
        
            alert("Este mes tiene 31 dias");
            break;
        
    
    case "Febrero":
        
            alert("Este mes tiene 29 dias");
            break;
        
    
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
         
             alert("Este mes tiene 30 dias");
             break;
           
    }



}//FIN DE LA FUNCIÓN