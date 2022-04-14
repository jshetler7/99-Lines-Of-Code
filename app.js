var friends = ['Austin', 'Kaleb', 'Isaac', 'Brandon', 'Peyton'];
var lineNumber = 99;
var lineNumber2 = 98;


function song(line, friend, line2) {
    while(line > 1) {
        console.log(line + " lines of code in the file, " + line + " lines of code; " + friend + " strikes one out, clears it all out, " + line2 + " lines of code in the file");
        line--;
        line2--;
    if(line2 == 0) {
        console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file")
    }
    }
}

for(var n = 0; n < friends.length; n++) {
    song(lineNumber, friends[n], lineNumber2);
}
