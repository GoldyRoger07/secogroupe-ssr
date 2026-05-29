import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brazil } from './brazil';

describe('Brazil', () => {
  let component: Brazil;
  let fixture: ComponentFixture<Brazil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brazil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brazil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
