let string1 = document.querySelector('#string1');
let string2 = document.querySelector('#string2');
let string3 = document.querySelector('#string3');

console.log('HI')
cur();
setInterval(cur, 100);

function cur() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    string2.style.transform = "rotate(${h * 30}deg)";
    string1.style.transform = "rotate(" + m * 6 + "deg)";
    string3.style.transform = "rotate(" + s * 6 + "deg)";
}
cur()