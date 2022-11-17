function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        // console.log(name);
        alert
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
