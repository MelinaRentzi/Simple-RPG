class Hero {
    constructor(name, life, gender, race, heroclass) {
        this.name = name;
        this.life = life;
        this.gender = gender;
        this.race = race;
        this.heroclass = heroclass;
    }
    getBackStory() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    getHitPoints() {
        console.log(`${this.name} has ${this.life} HP.`);
    }

    getGenderRaceAndClass() {
        console.log(`${this.name} is a ${this.gender} ${this.race} ${this.heroclass}.`);
    }

    constructor(items) {
        this.items = {
            item1: sword,
            item2: shield,
            item3: grenade
        }
    }
}

const hero = new Hero('Melina', 20, 'Female', 'Human', 'Warrior');
hero.getBackStory();
hero.getHitPoints();
hero.getGenderRaceAndClass();

const hero2 = new Hero('Peanut', 30, 'Female', 'Asura', 'Engineer');
hero2.getBackStory();
hero2.getHitPoints();
hero2.getGenderRaceAndClass();
