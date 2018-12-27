import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepBlueComponent } from './deep-blue.component';

describe('DeepBlueComponent', () => {
  let component: DeepBlueComponent;
  let fixture: ComponentFixture<DeepBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
