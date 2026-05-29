import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Haiti } from './haiti';

describe('Haiti', () => {
  let component: Haiti;
  let fixture: ComponentFixture<Haiti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Haiti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Haiti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
