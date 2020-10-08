// game.js
var hero; /* initialization magic goes here*/
var npcEnemy; /* initialization magic goes here*/
var npcBoss; /* initialization magic goes here*/
var potion; /* initialization magic goes here*/
var weapon; /* initialization magic goes here*/

// Intro
hero.description(); // "My name is Conan the Barbarian of Cimmeria."

// Stock-up
hero.pick(potion);
hero.pick(potion); // "You cannot carry any more weight 😫."
hero.equip(weapon);

// Enemy fight
hero.attack(npcEnemy);
npcEnemy.attack(hero);

// Boss fight
hero.attack(npcBoss);
npcBoss.attack(hero);
// hero.use(potion);
hero.attack(npcBoss);

// ?