var string1;
var cnd = 0;

function write(string, time) {
    var i = 0;
    var stopwrite = setInterval(() => {
        // if (string[i] == 'D') {
        //     document.querySelector("#changetext").innerHTML += " ";
        //     console.log("HELLO");
        // }
        document.querySelector("#changetext").innerText += string[i];

        i++;
    }, 100);
    setTimeout(() => {
        clearInterval(stopwrite);
        setTimeout(() => {
            clear(time);
        }, 1000);
    }, time);
}

function clear(time1) {
    // console.log(cnd);
    if (cnd == 0) {
        string = "Android Developer";
        cnd = 1;
        time = 1700;
    } else if (cnd == 1) {
        string = "Student";
        cnd = 2;
        time = 700;
    } else if (cnd == 2) {
        string = "Web Developer";
        cnd = 0;
        time = 1300;
    }

    var demostring;
    stopclear = setInterval(() => {
        demostring = document.getElementById("changetext").innerText;
        demostring = demostring.substring(0, demostring.length - 1);
        document.getElementById("changetext").innerHTML = demostring;
    }, 100);

    setTimeout(() => {
        document.getElementById("changetext").innerText = " ";
        clearInterval(stopclear);
        setTimeout(() => {
            write(string, time)
        }, 1000);
    }, time1);
}
window.onload = function() {
    write("Web Developer", 1300)
        // demo();
}

// function demo() {
//     var i = 0;
//     string2 = "Hello helll";
//     var str = document.querySelector("#demo").innerHTML = "";
//     // var a = 'HEllo ' + &nbsp + 'HELLO';
//     // console.log(a);
//     setInterval(() => {
//         console.log(i);
//         document.querySelector("#demo").innerHTML += string2[i];
//         i++;
//     }, 1000)
// }