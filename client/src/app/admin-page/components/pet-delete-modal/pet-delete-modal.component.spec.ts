import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDeleteModalComponent } from './pet-delete-modal.component';

describe('PetDeleteModalComponent', () => {
  let component: PetDeleteModalComponent;
  let fixture: ComponentFixture<PetDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
