// Implementa una función que nos diga que array tiene más elementos
// Si el array 'elementos1' tiene más elementos que el array 'elementos2'; la función debe devolver un 1. En caso contrario, devuelve un 2.
// Si tienen el mismo tamaño. debe devolver un 0.

function arrayMayor(elementos1, elementos2) {
    if (elementos1.length==elementos2.length) {
        return 0
    } else if(elementos1.length>elementos2.length){
        return 1
    }else if(elementos1.length<elementos2.length){
        return 2
    }else{
        return "Error";
    }
}

console.log(arrayMayor([1, 2], [4, 5])); // 0
console.log(arrayMayor([1, 2, 5], [4, 5])); // 1
console.log(arrayMayor([1, 2, 5], [4, 5, 8, 10])); // 2



