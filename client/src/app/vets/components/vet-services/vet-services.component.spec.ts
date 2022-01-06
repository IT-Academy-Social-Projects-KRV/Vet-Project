import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetServicesComponent } from './vet-services.component';

describe('VetServicesComponent', () => {
  let component: VetServicesComponent;
  let fixture: ComponentFixture<VetServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
