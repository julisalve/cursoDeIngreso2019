/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var resultado;
    
    //alert(dato) // sale undefinied 
    
    //dato = document.getElementById("lalala").value; // no anda sale null

    numero1 = document.getElementById("numeroUno").value; //primero tomo el valor, luego lo parseo
    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);


    //alert(numeroUno)//

    resultado = numero1 + numero2;

    alert("la suma es : " + resultado);



}

