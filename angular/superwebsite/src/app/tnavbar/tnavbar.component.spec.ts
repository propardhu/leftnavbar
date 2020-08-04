import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnavbarComponent } from './tnavbar.component';

describe('TnavbarComponent', () => {
  let component: TnavbarComponent;
  let fixture: ComponentFixture<TnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
