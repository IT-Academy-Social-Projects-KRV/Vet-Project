import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalUnitPageComponent } from './animal-unit-page.component';

describe('AnimalUnitPageComponent', () => {
  let component: AnimalUnitPageComponent;
  let fixture: ComponentFixture<AnimalUnitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalUnitPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalUnitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
