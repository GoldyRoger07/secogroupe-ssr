import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorialCleaning } from './janitorial-cleaning';

describe('JanitorialCleaning', () => {
  let component: JanitorialCleaning;
  let fixture: ComponentFixture<JanitorialCleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanitorialCleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanitorialCleaning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
