import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciergeSecurityExperts } from './concierge-security-experts';

describe('ConciergeSecurityExperts', () => {
  let component: ConciergeSecurityExperts;
  let fixture: ComponentFixture<ConciergeSecurityExperts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciergeSecurityExperts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciergeSecurityExperts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
