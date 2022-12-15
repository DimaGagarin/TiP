function swap(obj) {
if(obj.x.value != "" && obj.y.value != "")
    [obj.x.value, obj.y.value] = [obj.y.value, obj.x.value]
}