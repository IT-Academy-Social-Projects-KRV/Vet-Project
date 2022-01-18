import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditVetComponent } from './admin-edit-vet.component';

describe('AdminEditVetComponent', () => {
  let component: AdminEditVetComponent;
  let fixture: ComponentFixture<AdminEditVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
