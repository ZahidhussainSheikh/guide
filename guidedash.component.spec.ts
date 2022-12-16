import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedashComponent } from './guidedash.component';

describe('GuidedashComponent', () => {
  let component: GuidedashComponent;
  let fixture: ComponentFixture<GuidedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
