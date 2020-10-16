class Hero {
    constructor(name, life) {
        this.name = name;
        this.life = life;
    }
    getBackStory() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    getHitPoints() {
        console.log(`${this.name} has ${this.life} HP.`);
    }
}

const hero = new Hero('Melina', 20);
hero.getBackStory();
hero.getHitPoints();
