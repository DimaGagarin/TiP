function maq(form) {
    let minValue = form.minValue.value
    let maxValue = form.maxValue.value
    let size = form.size.value
    let array = []

    for (i = 0; i < size; i++) {
        array[i] = GetRandom(minValue, maxValue)
    }

    let changedArray = map(square, array)

    alert(array + "\n" + changedArray)
}

function GetRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + Number(min);
}

function map(fn, array) {
    let arrayOut = []

    for (i = 0; i < array.length; i++) {
        arrayOut[i] = fn(array[i])
    }
    
    return arrayOut
}

function square(a) {
    return Math.pow(a, 2);
}