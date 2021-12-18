import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetListPageComponent } from './vet-list-page.component';

describe('VetListPageComponent', () => {
  let component: VetListPageComponent;
  let fixture: ComponentFixture<VetListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
