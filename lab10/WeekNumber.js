function CheckWeek() {
    currentdate = new Date(document.getElementById("dateBox").value);
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    localStorage.setItem("result", Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7))
    if(isNaN(localStorage.getItem("result"))){
        alert("Не корректная дата")
    }
    else{
        document.getElementById("result").value = localStorage.getItem("result")
    }
}