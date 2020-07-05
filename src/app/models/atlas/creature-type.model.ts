import { TemperamentInfo } from './temperament-info.model';
import { StatsInfo } from './stats-info.model';
import { FoodInfo } from './food-info.model';
import { BreedingInfo } from './breeding-info.model';

export class CreatureType {
  id: number;
  breeding: BreedingInfo;
  food: FoodInfo[];
  label: string;
  name: string;
  speed: string;
  stat: StatsInfo;
  temperament: TemperamentInfo;
  timebolas: number;
  timefood: number;
}
