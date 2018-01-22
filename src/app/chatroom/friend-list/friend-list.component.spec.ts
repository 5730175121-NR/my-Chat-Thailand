import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreindListComponent } from './freind-list.component';

describe('FreindListComponent', () => {
  let component: FreindListComponent;
  let fixture: ComponentFixture<FreindListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreindListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
