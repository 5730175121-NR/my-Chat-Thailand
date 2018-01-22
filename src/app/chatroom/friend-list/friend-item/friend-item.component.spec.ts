import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreindItemComponent } from './freind-item.component';

describe('FreindItemComponent', () => {
  let component: FreindItemComponent;
  let fixture: ComponentFixture<FreindItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreindItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreindItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
