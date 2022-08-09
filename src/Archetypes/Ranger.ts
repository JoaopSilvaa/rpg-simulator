import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static instances = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Ranger.instances += 1;
  }

  energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}