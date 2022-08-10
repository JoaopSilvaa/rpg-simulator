import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected environment: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    for (let i = 0; i < this.environment.length; i += 1) {
      this.player.attack(this.environment[i]);
      if (this.environment[i].lifePoints === -1) {
        this.environment.splice(i, 1);
      }
      this.environment[i].attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}