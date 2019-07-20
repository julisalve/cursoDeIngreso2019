function mostrar()
{

var sexo;
sexo=prompt("Indique f o m");

while(sexo!="f" && sexo!="m")
{
    sexo=prompt("El sexo es incorrecto, indique m o f");
}

document.getElementById("Sexo").value=sexo;
}//FIN DE LA FUNCIÓN