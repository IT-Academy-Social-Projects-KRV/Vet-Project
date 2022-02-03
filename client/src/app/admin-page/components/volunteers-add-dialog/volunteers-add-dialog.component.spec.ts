import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersAddDialogComponent } from './volunteers-add-dialog.component';

describe('VolunteersAddDialogComponent', () => {
  let component: VolunteersAddDialogComponent;
  let fixture: ComponentFixture<VolunteersAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
