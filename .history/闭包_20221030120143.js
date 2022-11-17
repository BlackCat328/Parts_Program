function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(111);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
