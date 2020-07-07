import { CreatureStat } from './../../models/creature-stat.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CreatureType } from 'src/app/models/atlas/creature-type.model';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator-creature',
  templateUrl: './calculator-creature.component.html',
  styleUrls: ['./calculator-creature.component.scss']
})
export class CalculatorCreatureComponent implements OnInit, OnDestroy {
  observable$: Observable<CreatureType>;
  unsubscribe$: Subject<void> = new Subject<void>();

  creature: CreatureType;
  creatureStats: CreatureStat[];
  multiplers: Record<string, number> = {
    health: 1.5,
    food: 1,
    oxygen: 1,
    stamina: 1,
    attack: 2,
    weight: 6
  };
  displayedColumns: string[] = [
    'name',
    'base',
    'perLevel',
    'multiplier',
    'value',
    'points'
  ];

  calculatorForm: FormGroup;

  constructor(
    route: ActivatedRoute,
    appService: AppService,
    private formBuilder: FormBuilder) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.observable$ = appService.type(id);
  }

  ngOnInit(): void {
    this.observable$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.creature = result;
        this.creatureStats = [];

        for (const stat of Object.keys(this.creature.stat)) {
          const toAdd = {
            key: stat,
            name: stat,
            base: this.creature.stat[stat].base,
            perLevel: this.creature.stat[stat].pretame,
            multiplier: this.multiplers[stat]
          } as CreatureStat;
          this.creatureStats.push(toAdd);
        }
      });

    this.calculatorForm = this.formBuilder.group({
      healthMultiplier: [this.multiplers.health],
      foodMultiplier: [this.multiplers.food],
      oxygenMultiplier: [this.multiplers.oxygen],
      staminaMultiplier: [this.multiplers.stamina],
      attackMultiplier: [this.multiplers.attack],
      weightMultiplier: [this.multiplers.weight],
      healthValue: [null],
      foodValue: [null],
      oxygenValue: [null],
      staminaValue: [null],
      attackValue: [null],
      weightValue: [null],
    });
  }

  points(stat: CreatureStat): number {
    const multiplier = Number(this.calculatorForm.get(`${stat.key}Multiplier`).value);
    const value = Number(this.calculatorForm.get(`${stat.key}Value`).value);
    if (value > stat.base) {
      return Math.ceil((value - stat.base) / (stat.perLevel * multiplier));
    }
    return 0;
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
