var Greeter = (function () {
    // TypeScript stuff alert
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
var myGreeting = new Greeter('Hello, world!');
document.getElementById('container').innerHTML = myGreeting.sayHi();
