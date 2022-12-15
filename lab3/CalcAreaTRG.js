function calc(obj) {
    let first = obj.x1.value - obj.x3.value
    let second = obj.x2.value - obj.x3.value
    let third = obj.y1.value - obj.y3.value
    let fourth = obj.y2.value - obj.y3.value
    let area = Math.abs((first * fourth - second * third) / 2)
    obj.result.value = area
}