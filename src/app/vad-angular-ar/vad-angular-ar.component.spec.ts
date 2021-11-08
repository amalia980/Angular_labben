import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadAngularArComponent } from './vad-angular-ar.component';

describe('VadAngularArComponent', () => {
  let component: VadAngularArComponent;
  let fixture: ComponentFixture<VadAngularArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VadAngularArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VadAngularArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
