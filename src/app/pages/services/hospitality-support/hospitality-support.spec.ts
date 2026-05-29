import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalitySupport } from './hospitality-support';

describe('HospitalitySupport', () => {
  let component: HospitalitySupport;
  let fixture: ComponentFixture<HospitalitySupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalitySupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalitySupport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
