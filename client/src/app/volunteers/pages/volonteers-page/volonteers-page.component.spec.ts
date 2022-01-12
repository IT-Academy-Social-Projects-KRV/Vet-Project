import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersListPageComponent } from './volunteers-list-page.component';

describe('VolunteersListPageComponent', () => {
  let component: VolunteersListPageComponent;
  let fixture: ComponentFixture<VolunteersListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
