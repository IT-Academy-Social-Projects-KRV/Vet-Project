import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetListCardComponent } from './vet-list-card.component';

describe('VetListCardComponent', () => {
  let component: VetListCardComponent;
  let fixture: ComponentFixture<VetListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
