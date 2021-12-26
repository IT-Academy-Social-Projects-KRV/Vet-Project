import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListPageComponent } from './animal-list-page.component';

describe('AnimalListPageComponent', () => {
  let component: AnimalListPageComponent;
  let fixture: ComponentFixture<AnimalListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
