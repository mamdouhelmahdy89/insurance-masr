import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInsuranceComponent } from './person-insurance.component';

describe('PersonInsuranceComponent', () => {
  let component: PersonInsuranceComponent;
  let fixture: ComponentFixture<PersonInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
