import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetEditDialogComponent } from './pet-edit-dialog.component';

describe('PetEditDialogComponent', () => {
  let component: PetEditDialogComponent;
  let fixture: ComponentFixture<PetEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
