function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
