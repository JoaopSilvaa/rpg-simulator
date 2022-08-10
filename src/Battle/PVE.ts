import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environments: SimpleFighter[];
  constructor(
    player: Fighter,
    enviroments: SimpleFighter[],
  ) {
    super(player);
    this._player = player;
    this._environments = enviroments;
  }

  fight(): number {
    this._environments.forEach((environment) => {
      while (
        this._player.lifePoints !== -1 && environment.lifePoints !== -1
      ) {
        this._player.attack(environment);
        environment.attack(this._player);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}