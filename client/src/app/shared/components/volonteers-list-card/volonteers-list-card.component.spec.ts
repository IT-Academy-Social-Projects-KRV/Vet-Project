import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolonteersListCardComponent } from './volonteers-list-card.component';

describe('VolonteersListCardComponent', () => {
  let component: VolonteersListCardComponent;
  let fixture: ComponentFixture<VolonteersListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolonteersListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolonteersListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
