import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacComponent } from './sac.component';

describe('SacComponent', () => {
  let component: SacComponent;
  let fixture: ComponentFixture<SacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacComponent]
    });
    fixture = TestBed.createComponent(SacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});