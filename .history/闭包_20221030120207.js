function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log();
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
