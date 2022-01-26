import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateVetComponent } from './admin-update-vet.component';

describe('AdminUpdateVetComponent', () => {
  let component: AdminUpdateVetComponent;
  let fixture: ComponentFixture<AdminUpdateVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
