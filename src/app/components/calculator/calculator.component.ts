import { CreatureType } from './../../models/atlas/creature-type.model';
import { AppService } from './../../services/app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {
  observable$: Observable<CreatureType[]>;
  unsubscribe$: Subject<void> = new Subject<void>();
  latestValue: CreatureType[];

  constructor(appService: AppService) {
    this.observable$ = appService.types();
  }

  ngOnInit(): void {
    this.observable$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => this.latestValue = result);
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
