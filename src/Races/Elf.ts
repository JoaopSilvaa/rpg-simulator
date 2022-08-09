import Race from './Race';

export default class Elf extends Race { 
  private static instances = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf.instances += 1;
  }
  
  maxLifePoints = 99;

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}