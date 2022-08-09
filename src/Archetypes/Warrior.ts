import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static instances = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Warrior.instances += 1;
  }

  energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}