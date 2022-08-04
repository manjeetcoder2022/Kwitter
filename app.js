function random() {
    var a = Math.floor((Math.random() * 6) + 1)

    b = document.getElementById("demo")
    b.innerHTML = a
    var d = 0
    if (a == 1) {
        d = 1
        console.log("man")
        number = a
    }
    if (d == 2) {
        second_random = Math.floor((Math.random() * 5) + 1)
        console.log("number" + number)
        console.log(second_random)
        replace_number = b.innerHTML.replace(1, second_random)
        document.getElementById("demo").innerHTML = replace_number
        d = 0
    }
}