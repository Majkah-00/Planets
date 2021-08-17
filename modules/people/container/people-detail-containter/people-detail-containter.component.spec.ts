import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailContainterComponent } from './people-detail-containter.component';

describe('PeopleDetailContainterComponent', () => {
  let component: PeopleDetailContainterComponent;
  let fixture: ComponentFixture<PeopleDetailContainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleDetailContainterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailContainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
