function mostrar()
{
//tomo la edad  
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o 
//adolescente (entre 13 y 17 años) o niño (menor a 13 años).

var edad;

edad=document.getElementById("edad").value;
edad=parseInt(edad)

if(edad>=18)
{
    alert("Usted es mayor de edad");
}
else if(edad<18 && edad>=13)
{
    alert("usted es adolescente");
}
else
{
    alert("usted es un niño");
}

}//FIN DE LA FUNCIÓN