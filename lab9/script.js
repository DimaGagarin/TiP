function IMG(pict, action) {
    if (action) {
        pict.src = "rbit1.gif"
    }
    else {
        pict.src = "rbit0.gif"
    }
}
let k = 0
function succpict1() {
    if (k <= 3) {
        document.myPict.src = "m" + k + ".gif"
        k++
        setTimeout("succpict1()", 2000)
    }
    else{
        document.myPict.src=""
        k = 1;
    }
}
function succpict2() {
    if (k <= 3) {
        document.myPict.src = "b" + k + ".gif"
        k++
        setTimeout("succpict2()", 2000)
    }
    else{
        document.myPict.src=""
        k = 1;
    }
}
function succpict3() {
    if (k <= 3) {
        document.myPict.src = "n" + k + ".gif"
        k++
        setTimeout("succpict3()", 2000)
    }
    else{
        document.myPict.src=""
        k = 1;
    }
}
function succpict4() {
    if (k <= 3) {
        document.myPict.src = "v" + k + ".gif"
        k++
        setTimeout("succpict4()", 2000)
    }
    else{
        document.myPict.src=""
        k = 1;
    }
}