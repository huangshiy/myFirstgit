import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalladComponent } from './scallad.component';

describe('ScalladComponent', () => {
  let component: ScalladComponent;
  let fixture: ComponentFixture<ScalladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
