import { CreatureType } from './../../models/atlas/creature-type.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss']
})
export class CreatureCardComponent implements OnInit {

  @Input() creature: CreatureType;

  constructor() { }

  ngOnInit(): void {
    console.log(this.creature);
  }

}
