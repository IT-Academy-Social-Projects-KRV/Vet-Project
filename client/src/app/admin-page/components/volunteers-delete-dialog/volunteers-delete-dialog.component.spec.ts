import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersDeleteDialogComponent } from './volunteers-delete-dialog.component';

describe('VolunteersDeleteDialogComponent', () => {
  let component: VolunteersDeleteDialogComponent;
  let fixture: ComponentFixture<VolunteersDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
