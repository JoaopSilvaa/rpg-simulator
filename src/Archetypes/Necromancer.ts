import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static instances = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.instances += 1;
  }

  energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}