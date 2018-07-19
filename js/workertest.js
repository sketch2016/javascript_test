var count = 0;
function add() {
    count++;
    postMessage(count);
    if (count == 10) {
        //alert('clear interval')
        clearInterval(i);
        //alert('clear interval')
    }
}

var i = setInterval(add, 1000);
