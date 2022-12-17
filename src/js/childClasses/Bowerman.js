import Character from '../Character.js';

export default class BowermanCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.type = type;
    this.name = name;

    this.defense = 25;
    this.attack = 25;
  }

  levelUp() {
    super.levelUp();
  }

  damage(points) {
    super.damage(points);
  }
}
