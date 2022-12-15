function selectOne(n) {
    if (n == 0) {
        tempPicture.hidden = true
    }
    else {
        tempPicture.src = "p" + n + ".png"
        tempPicture.hidden = false
    }
}

function makeBigger(n) {
    n.width = "200"
}

function makeSmaller(n) {
    n.width = "90"
}

function showArrow(n) {
    n.style.visibility = "visible"
}
function hideArrow(n) {
    n.style.visibility = "hidden"
}