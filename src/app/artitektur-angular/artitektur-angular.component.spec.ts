import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtitekturAngularComponent } from './artitektur-angular.component';

describe('ArtitekturAngularComponent', () => {
  let component: ArtitekturAngularComponent;
  let fixture: ComponentFixture<ArtitekturAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtitekturAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtitekturAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
