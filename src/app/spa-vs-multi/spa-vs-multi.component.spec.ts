import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaVsMultiComponent } from './spa-vs-multi.component';

describe('SpaVsMultiComponent', () => {
  let component: SpaVsMultiComponent;
  let fixture: ComponentFixture<SpaVsMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaVsMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaVsMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
