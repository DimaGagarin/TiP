function GetEndContract() {
    let dateList = []
    let yearList = document.getElementsByName("year")
    let durationList = document.getElementsByName("duration")

    for (i = 0; i < 4; i++) {
        let tempDate = yearList[i].valueAsDate
        tempDate.setFullYear(yearList[i].valueAsDate.getFullYear() + Number(durationList[i].value))

        dateList.push(tempDate)
    }

    return dateList
}

//TODO: finish function
function ContractYearTime(yearTime) {
    let result = ""
    let endList = GetEndContract()

    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {
        month = endList[i].valueAsDate.getFullMonth()

        switch (yearTime) {
            case (Summer):
                if (month >= 6 && month <= 8) {
                    result += nameList[i].value + "\n"
                }
                break;
            case (Winter):
                if (month >= 11 || month <= 2) {
                    result += nameList[i].value + "\n"
                }
                break;
            case (Autimn):
                if (month >= 9 && month <= 11) {
                    result += nameList[i].value + "\n"
                }
                break;
            case (Spring):
                if (month >= 3 && month <= 5) {
                    result += nameList[i].value + "\n"
                }
                break;
        }
    }

    Cout(result)
}

//TODO: finish function
function ContractQuartal(quartalTime) {
    let result = ""
    let endList = GetEndContract()

    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {
        month = endList[i].valueAsDate.getFullMonth()

        switch (quartalTime) {
            case (first):
                if (month >= 1 && month <= 3) {
                    result += nameList[i].value + "\n"
                }
                break;
            case (second):
                if (month >= 4 || month <= 6) {
                    result += nameList[i].value + "\n"
                }
                break;
            case (third):
                if (month >= 7 && month <= 9) {
                    result += nameList[i].value + "\n"
                }
                break;
            case (fourth):
                if (month >= 10 && month <= 12) {
                    result += nameList[i].value + "\n"
                }
                break;
        }
    }

    Cout(result)
}
//TODO: finish function
function ContractDurationTime(startAt, endAt) {
    let result = ""
    let endList = GetEndContract()

    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {

        alert(endList[i] + "\n" + startAt.valueAsDate + "-\n" + endAt.valueAsDate)
        if (endList[i] >= startAt.valueAsDate && endAt[i] <= endAt.valueAsDate) {
            result += nameList[i].value + "\n"
        }
    }

    Cout(result)
}
//TODO: refactor function
function ContractEndAt(accurDate) {
    let result = ""
    let endList = GetEndContract()

    let nameList = document.getElementsByName("name")

    for (i = 0; i < endList.length; i++) {

        if (endList[i].toDateString() == accurDate.valueAsDate.toDateString()) {
            result += nameList[i].value + "\n"
        }
    }

    Cout(result)
}

function Cout(result) {
    if (result == "") {
        result += "No employee"
    }
    alert(result)
}