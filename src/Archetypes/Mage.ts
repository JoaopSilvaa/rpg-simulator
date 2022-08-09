import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static instances = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Mage.instances += 1;
  }

  energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}