import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPAsComponent } from './spas.component';

describe('SPAsComponent', () => {
  let component: SPAsComponent;
  let fixture: ComponentFixture<SPAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
