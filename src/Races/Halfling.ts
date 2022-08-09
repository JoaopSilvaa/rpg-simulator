import Race from './Race';

export default class Halfling extends Race { 
  private static instances = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Halfling.instances += 1;
  }
  
  maxLifePoints = 60;

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}