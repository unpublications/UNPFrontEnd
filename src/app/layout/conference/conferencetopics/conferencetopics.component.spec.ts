import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencetopicsComponent } from './conferencetopics.component';

describe('ConferencetopicsComponent', () => {
  let component: ConferencetopicsComponent;
  let fixture: ComponentFixture<ConferencetopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencetopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencetopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
