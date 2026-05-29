import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingSolutions } from './staffing-solutions';

describe('StaffingSolutions', () => {
  let component: StaffingSolutions;
  let fixture: ComponentFixture<StaffingSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffingSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingSolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
