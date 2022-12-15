function img(n, action) {
    if (action) {
        document.images[n - 1].src = "flower.png"
    }
    else {
        document.images[n - 1].src = "p" + n + ".png"
    }
}