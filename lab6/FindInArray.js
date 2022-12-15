let variable = prompt("Enter variable")
let array = ["q", 2, false, "false", "pop", undefined]

find(array, variable)

function find(array, variable){
    for(i = 0; i < array.length; i++){
        if(array[i] === variable){
            alert(i + 1)
            break;
        }
    }
}