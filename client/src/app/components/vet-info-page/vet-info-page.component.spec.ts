import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetInfoPageComponent } from './vet-info-page.component';

describe('VetInfoPageComponent', () => {
  let component: VetInfoPageComponent;
  let fixture: ComponentFixture<VetInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
