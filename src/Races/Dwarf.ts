import Race from './Race';

export default class Dwarf extends Race { 
  private static instances = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }
  
  maxLifePoints = 80;

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}