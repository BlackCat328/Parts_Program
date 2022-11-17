function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        log
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
