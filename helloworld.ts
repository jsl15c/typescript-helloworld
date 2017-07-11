class Greeter {
  // TypeScript stuff alert
  constructor(public message:string){}

  sayHi() {
    return `<h1>${this.message}</h1>`
  }
}

const myGreeting = new Greeter('Hello, world!');

document.getElementById('container').innerHTML = myGreeting.sayHi();
