import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsDetailContainerComponent } from './starships-detail-container.component';

describe('StarshipsDetailContainerComponent', () => {
  let component: StarshipsDetailContainerComponent;
  let fixture: ComponentFixture<StarshipsDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
