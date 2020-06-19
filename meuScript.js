function comparar(){
    let num1 = Number((document.getElementById('input1')).value);
    let num2 = Number((document.getElementById('input2')).value);

    let result = document.getElementById('resultados');

    if(num1 > num2){
         result.innerHTML =`O ${num1} é o número maior`
     }else{
         result.innerHTML =`O ${num2} é o número maior`
     }
    /*if(num1 > num2){
        alert(`O ${num1} é o número maior`);
    }else{
        alert(`O ${num2} é o número maior`);
    }*/
}


    