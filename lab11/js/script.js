$(document).ready(function () {
    let lit = $("#my_links li:has(a)")
    lit.css('color', 'red')

    let at = $("#my_links a[href^='documents']")
    at.css('color', 'green')

    tablet = $("table#moto_table tr:even  td:last-child")
    tablet.css('color', 'blue')
})