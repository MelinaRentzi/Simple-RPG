var items = {
    item1: 'sword',
    item2: 'shield',
    item3: 'mount'
};


class Hero {
    constructor(name, life, gender, race, heroclass, items) {
        this.name = name;
        this.life = life;
        this.gender = gender;
        this.race = race;
        this.heroclass = heroclass;
        this.items = items;
    }
    getBackStory() {
        console.log(`Hello, my name is ${this.name}.`);
        console.log(`${this.name} has ${this.life} HP.`);
        console.log(`${this.name} is a ${this.gender} ${this.race} ${this.heroclass}.`);
    }

    itemEquip() {
        console.log(`${this.heroclass} has ${Object.keys(this.items).length} items, one ${this.items.item1}, one ${this.items.item2} and one ${this.items.item3}.`);
    }
}

const hero = new Hero('Melina', 20, 'Female', 'Human', 'Warrior', items);
hero.getBackStory();
hero.itemEquip();
