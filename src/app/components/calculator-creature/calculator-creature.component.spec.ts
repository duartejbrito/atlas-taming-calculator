import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorCreatureComponent } from './calculator-creature.component';

describe('CalculatorCreatureComponent', () => {
  let component: CalculatorCreatureComponent;
  let fixture: ComponentFixture<CalculatorCreatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorCreatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
