import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      const life = this._lifePoints - damage;
      if (life <= 0) return -1;
      return life;
    }
    return this._lifePoints - attackPoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}