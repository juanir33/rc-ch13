// PARES E IMPARES

let num = Number(prompt('Ingrese un numero'));

if (!isNaN(num)){
    if ((num%2)==0){
        alert('EL NUMERO INGRESADO ES PAR')
    
    }else{
        alert('EL NUMERO INGRESADO ES IMPAR')
    }
} else{
    alert('POR FAVOR INGRESE UN NUMERO VALIDO')
}