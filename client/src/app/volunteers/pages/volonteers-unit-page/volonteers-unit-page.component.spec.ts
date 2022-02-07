import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolonteersUnitPageComponent } from './volonteers-unit-page.component';

describe('VolonteersUnitPageComponent', () => {
  let component: VolonteersUnitPageComponent;
  let fixture: ComponentFixture<VolonteersUnitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolonteersUnitPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolonteersUnitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
