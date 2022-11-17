function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        // console.log(name);
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
