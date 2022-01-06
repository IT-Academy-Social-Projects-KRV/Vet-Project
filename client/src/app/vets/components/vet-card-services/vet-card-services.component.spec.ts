import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCardServicesComponent } from './vet-card-services.component';

describe('VetCardServicesComponent', () => {
  let component: VetCardServicesComponent;
  let fixture: ComponentFixture<VetCardServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetCardServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
