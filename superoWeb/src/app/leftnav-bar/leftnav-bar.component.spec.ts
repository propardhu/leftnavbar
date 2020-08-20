import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavBarComponent } from './leftnav-bar.component';

describe('LeftnavBarComponent', () => {
  let component: LeftnavBarComponent;
  let fixture: ComponentFixture<LeftnavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
