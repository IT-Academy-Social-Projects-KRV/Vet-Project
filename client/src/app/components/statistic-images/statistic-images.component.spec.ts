import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticImagesComponent } from './statistic-images.component';

describe('StatisticImagesComponent', () => {
  let component: StatisticImagesComponent;
  let fixture: ComponentFixture<StatisticImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
