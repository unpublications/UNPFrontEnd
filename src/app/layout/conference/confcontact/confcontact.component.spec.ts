import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcontactComponent } from './confcontact.component';

describe('ConfcontactComponent', () => {
  let component: ConfcontactComponent;
  let fixture: ComponentFixture<ConfcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
