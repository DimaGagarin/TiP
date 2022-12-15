function calc(form) {
    let sum = 0
    let count = 0

    for (i = 0; i < 6; i++) {
        temp = Number(form1.elements[i].value)
        sum += temp
        if (temp >= 20) {
            count++
        }
    }


    let result = "None"
    if (count == 6)
        if (sum == 180) {
            result = "First"
        }
        else if (sum >= 130) {
            result = "Second"
        }
        else if (sum == 120) {
            result = "Third"
        }
        else {
            result = "None"
        }

    alert("Sum: " + sum + "\n" + "Place: " + result)
}