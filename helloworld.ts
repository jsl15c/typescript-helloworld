class Greeter {
  // TypeScript stuff alert
  constructor(public message:string,
              public whatever:number,
              public other: boolean){}

  sayHi() {
    return `<h1>${this.message}</h1>`
  }
}

const myGreeting = new Greeter('Hello, world!', 99, true);

document.getElementById('container').innerHTML = myGreeting.sayHi();

alert('yay!');
