var Greeter = (function () {
    // TypeScript stuff alert
    function Greeter(message, whatever, other) {
        this.message = message;
        this.whatever = whatever;
        this.other = other;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
var myGreeting = new Greeter('Hello, world!', 99, true);
document.getElementById('container').innerHTML = myGreeting.sayHi();
alert('yay!');
