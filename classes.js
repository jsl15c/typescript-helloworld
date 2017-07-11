var Soldier = (function () {
    // specify type of property, default value = ''
    function Soldier(health, strength, specialization, name, weapon) {
        this.health = health;
        this.strength = strength;
        this.specialization = specialization;
        this.name = name;
        this.weapon = weapon;
        this.isDead = false;
    }
    Soldier.prototype.receiveDamage = function (damage) {
        this.health = this.health - damage;
        return "Please don't kill me!";
    };
    return Soldier;
}());
var Viking = (function () {
    function Viking(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Viking.prototype.receiveDamage = function (damage) {
        this.health = this.health - damage;
        return "ODIN, RAWR!";
    };
    return Viking;
}());
var Saxon = (function () {
    function Saxon(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Saxon.prototype.receiveDamage = function (damage) {
        this.health = this.health - damage;
        return "Please don't kill me!";
    };
    return Saxon;
}());
var soldierA = new Soldier(1000, 20, 'sniper', 'ragnaar', 'bow & arrow');
var soldierB = new Soldier(100, 300, 'warrior', 'gudrun', 'axe');
var saxonA = new Saxon(100, 10);
var saxonB = new Saxon(200, 20);
var vikingA = new Viking('Lief Erikson', 3000, 300);
var vikingB = new Viking('Ofred Stormcloak', 4000, 400);
function peopleAttack(person1, person2) {
    person2.receiveDamage(person1.strength);
    person1.receiveDamage(person2.strength);
}
peopleAttack(vikingA, saxonB);
peopleAttack(vikingA, soldierB);
