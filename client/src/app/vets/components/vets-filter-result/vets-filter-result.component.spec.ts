import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetsFilterResultComponent } from './vets-filter-result.component';

describe('VetsFilterResultComponent', () => {
  let component: VetsFilterResultComponent;
  let fixture: ComponentFixture<VetsFilterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetsFilterResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetsFilterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
