import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsInsuranceComponent } from './cars-insurance.component';

describe('CarsInsuranceComponent', () => {
  let component: CarsInsuranceComponent;
  let fixture: ComponentFixture<CarsInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
