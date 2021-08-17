import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailContainerComponent } from './planet-detail-container.component';

describe('PlanetDetailContainerComponent', () => {
  let component: PlanetDetailContainerComponent;
  let fixture: ComponentFixture<PlanetDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
