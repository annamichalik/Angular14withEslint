import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeXComponent } from './gauge-x.component';

describe('GaugeXComponent', () => {
  let component: GaugeXComponent;
  let fixture: ComponentFixture<GaugeXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaugeXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
