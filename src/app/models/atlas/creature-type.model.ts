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
  temperament: string;
  timebolas: number;
  timefood: number;
}
