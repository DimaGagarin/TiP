let age = prompt("Enter your age")
let password

if(age == ""){
    AccessDeny()
} 
else if (age > 14) {
    password = prompt("Enter password")
    if (age < 18) {
        if (password == "Родительский контроль") {
            GrantAccess()
        }
        else {
            AccessDeny()
        }
    }
    else {
        if (password == "Я взрослый") {
            GrantAccess()
        }
        else {
            AccessDeny()
        }
    }
}
else {
    alert("Age is strange")
}

function GrantAccess() {
    alert("Welome!")
}

function AccessDeny() {
    alert("Enter canceled")
}