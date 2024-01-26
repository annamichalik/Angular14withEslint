import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyD3ComponentComponent } from './my-d3-component.component';

describe('MyD3ComponentComponent', () => {
  let component: MyD3ComponentComponent;
  let fixture: ComponentFixture<MyD3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyD3ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyD3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
