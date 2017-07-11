class Soldier implements AttackerInterface {
  isDead:boolean = false;
  // specify type of property, default value = ''

  constructor(
    public health:number,
    public strength:number,
    public specialization:string,
    public name:string,
    public weapon:string) {}

    receiveDamage(damage:number){
      this.health = this.health - damage;
      return "Please don't kill me!";
    }
}

class Viking implements AttackerInterface {
  constructor(
    public name:string,
    public health:number,
    public strength:number
  ){}

  receiveDamage(damage:number){
    this.health = this.health - damage;
    return "ODIN, RAWR!";
  }
}

class Saxon implements AttackerInterface {
  constructor(
    public health:number,
    public strength:number
  ){}

  receiveDamage(damage:number){
    this.health = this.health - damage;
    return "Please don't kill me!";
  }
}

const soldierA = new Soldier(1000, 20, 'sniper', 'ragnaar', 'bow & arrow');
const soldierB = new Soldier(100, 300, 'warrior', 'gudrun', 'axe');

const saxonA = new Saxon(100, 10);
const saxonB = new Saxon(200, 20);

const vikingA = new Viking('Lief Erikson', 3000, 300);
const vikingB = new Viking('Ofred Stormcloak', 4000, 400);

function peopleAttack (person1:AttackerInterface, person2:AttackerInterface) {
    person2.receiveDamage(person1.strength);
    person1.receiveDamage(person2.strength);
}

// interface describes the STRUCTURE of an object
interface AttackerInterface {
  // attackers need a property strength (number)
  strength:number;
  // attackers need a method receiveDamage()
  receiveDamage(number);
}

peopleAttack(vikingA, saxonB);
peopleAttack(vikingA, soldierB);
