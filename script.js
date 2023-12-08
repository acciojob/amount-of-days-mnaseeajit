//your JS code here. If required.
function output(yr) {
    if ((yr % 4 == 0 && yr % 100 != 0) || (yr % 400 == 0)) {
        return 366;
    }
    return 365;
}

let yr = prompt("daysOfAYear");
alert(output(yr));
