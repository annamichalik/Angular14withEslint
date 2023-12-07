import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AngularDataComponent} from './angular-data.component';

describe('AngularDataComponent', () => {
  let component: AngularDataComponent;
  let fixture: ComponentFixture<AngularDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularDataComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AngularDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-eslint'`, () => {
    expect(component.title).toEqual('angular-eslint');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toEqual('angular-eslint app is running!');
  });
});
