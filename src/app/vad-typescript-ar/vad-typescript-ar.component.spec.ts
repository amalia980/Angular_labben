import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadTypescriptArComponent } from './vad-typescript-ar.component';

describe('VadTypescriptArComponent', () => {
  let component: VadTypescriptArComponent;
  let fixture: ComponentFixture<VadTypescriptArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VadTypescriptArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VadTypescriptArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
