function GetEndContract() {
    let dateList = []
    let yearList = document.getElementsByName("year")
    let durationList = document.getElementsByName("duration")

    for (i = 0; i < 4; i++) {
        let tempDate = yearList[i].valueAsDate

        tempDate.setFullYear(yearList[i].valueAsDate.getFullYear() + Number(durationList[i].value))
        temp = (new Date(tempDate)).toISOString().split('T')[0]

        dateList.push(temp)
    }

    return dateList
}

function ContractYearTime(yearTime) {
    let result = ""
    let endList = GetEndContract()
    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {
        month = (new Date(endList[i])).getMonth() + 1

        switch (yearTime.value) {
            case "summer":
                if (month >= 6 && month <= 8) {
                    result += nameList[i].value + "\n"
                }
                break;
            case "winter":
                if (month >= 11 || month <= 2) {
                    result += nameList[i].value + "\n"
                }
                break;
            case "autimn":
                if (month >= 9 && month <= 11) {
                    result += nameList[i].value + "\n"
                }
                break;
            case "spring":
                if (month >= 3 && month <= 5) {
                    result += nameList[i].value + "\n"
                }
                break;
        }
    }

    localStorage.setItem("result", result)
    Cout()
}

function ContractQuartal(quartalTime) {
    let result = ""
    let endList = GetEndContract()
    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {
        month = (new Date(endList[i])).getMonth() + 1

        switch (quartalTime.value) {
            case "first":
                if (month >= 1 && month <= 3) {
                    result += nameList[i].value + "\n"
                }
                break;
            case "second":
                if (month >= 4 || month <= 6) {
                    result += nameList[i].value + "\n"
                }
                break;
            case "third":
                if (month >= 7 && month <= 9) {
                    result += nameList[i].value + "\n"
                }
                break;
            case "fourth":
                if (month >= 10 && month <= 12) {
                    result += nameList[i].value + "\n"
                }
                break;
        }
    }

    localStorage.setItem("result", result)
    Cout()
}

function ContractDurationTime(startAt, endAt) {
    let result = ""
    let endList = GetEndContract()
    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {
        if (endList[i] >= startAt.value && endList[i] <= endAt.value) {
            result += nameList[i].value + "\n"
        }
    }

    localStorage.setItem("result", result)
    Cout()
}

function ContractEndAt(accurDate) {
    let result = ""
    let endList = GetEndContract()
    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {
        if (endList[i] == accurDate.value) {
            result += nameList[i].value + "\n"
        }
    }

    localStorage.setItem("result", result)
    Cout()
}

function Cout() {
    let result = localStorage.getItem("result")
    
    if (result == "") {
        result += "No employee"
    }
    
    document.getElementById("resultArea").value = result
}
