let size = prompt("Enter field size")
if (size > 0) {
    for (i = 0; i < size; i++) {
        document.write("&nbsp")            
        for (j = 0; j < size; j++) {
            if ((j + i) % 2 == 0)
                document.write("&nbsp&nbsp")
            else
                document.write("#")
        }
        document.write("<br>")
    }
}


