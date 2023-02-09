import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuringFacilitiesComponent } from './securing-facilities.component';

describe('SecuringFacilitiesComponent', () => {
  let component: SecuringFacilitiesComponent;
  let fixture: ComponentFixture<SecuringFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuringFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuringFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
