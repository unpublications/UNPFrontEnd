import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EposterComponent } from './eposter.component';

describe('EposterComponent', () => {
  let component: EposterComponent;
  let fixture: ComponentFixture<EposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
