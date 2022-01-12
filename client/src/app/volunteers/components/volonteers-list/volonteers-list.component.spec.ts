import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolonteersListComponent } from './volonteers-list.component';

describe('VolonteersListComponent', () => {
  let component: VolonteersListComponent;
  let fixture: ComponentFixture<VolonteersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolonteersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolonteersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
